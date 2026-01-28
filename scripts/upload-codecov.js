const { createWriteStream, chmodSync, unlinkSync } = require('fs'), https = require('https'), os = require('os'), path = require('path'), { spawnSync } = require('child_process');
const platform = { linux: 'linux', darwin: 'macos', win32: 'windows' }[process.platform];
if (!platform) { console.error(`Unsupported platform: ${process.platform}`); process.exit(1); }
const isWin = process.platform === 'win32';
const bin = isWin ? 'codecov.exe' : 'codecov';
const dest = path.join(os.tmpdir(), `codecov-${process.pid}-${Date.now()}${isWin ? '.exe' : ''}`);
const url = `https://uploader.codecov.io/latest/${platform}/${bin}`;
const cleanup = () => { try { unlinkSync(dest); } catch {} };
const download = (downloadUrl) => new Promise((resolve, reject) => {
    https.get(downloadUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) { res.resume(); return resolve(download(res.headers.location)); }
        if (res.statusCode !== 200) { res.resume(); return reject(new Error(`Download failed (${res.statusCode}) from ${downloadUrl}`)); }
        const file = createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
        file.on('error', reject);
    }).on('error', reject);
});
download(url).then(() => {
    if (!isWin) chmodSync(dest, 0o755);
    const result = spawnSync(dest, ['-f', 'coverage/lcov.info', ...process.argv.slice(2)], { stdio: 'inherit' });
    cleanup(); if (result.error) throw result.error;
    process.exit(result.status ?? 1);
}).catch((error) => {
    cleanup(); console.error(`Codecov upload failed: ${error.message}`);
    process.exit(1);
});
