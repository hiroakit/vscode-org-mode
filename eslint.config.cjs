const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
});

module.exports = [
    ...compat.config({
        env: {
            browser: true,
            es2021: true
        },
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended"
        ],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        plugins: [
            "@typescript-eslint"
        ],
        rules: {
            semi: ["error", "always"]
        }
    })
];
