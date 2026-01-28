import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
    tests: [
        {
            files: 'out/test/**/*.test.js',
            srcDir: 'src',
        },
    ],
    coverage: {
        reporter: ['html', 'lcov', 'text-summary'],
        output: 'coverage',
    },
});
