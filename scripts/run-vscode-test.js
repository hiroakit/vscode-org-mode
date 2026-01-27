const { spawn, spawnSync } = require('child_process');

function hasCommand(cmd) {
  const result = spawnSync(cmd, ['--help'], { stdio: 'ignore' });
  if (result.error && result.error.code === 'ENOENT') return false;
  return true;
}

function canConnectToDisplay() {
  const display = process.env.DISPLAY;
  if (!display) return false;
  if (!hasCommand('xdpyinfo')) return true;
  const result = spawnSync('xdpyinfo', ['-display', display], { stdio: 'ignore' });
  return result.status === 0;
}

function run(cmd, args) {
  const child = spawn(cmd, args, { stdio: 'inherit' });
  child.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 1);
  });
}

const vscodeTestBin = process.platform === 'win32' ? 'vscode-test.cmd' : 'vscode-test';

const shouldUseXvfb =
  process.platform === 'linux' && hasCommand('xvfb-run') && !canConnectToDisplay();

if (shouldUseXvfb) {
  run('xvfb-run', ['-a', vscodeTestBin]);
} else {
  run(vscodeTestBin, []);
}

