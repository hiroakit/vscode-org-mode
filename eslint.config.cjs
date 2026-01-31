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
        settings: {
            "import/parsers": {
                "@typescript-eslint/parser": [".ts"]
            },
            "import/resolver": {
                typescript: {
                    project: "./tsconfig.json"
                },
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"]
                }
            }
        },
        plugins: [
            "@typescript-eslint",
            "import",
            "unused-imports"
        ],
        rules: {
            semi: ["error", "always"],
            "max-lines": ["error", { max: 500, skipComments: true }],
            complexity: ["error", { max: 12 }],
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "error",
                {
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    caughtErrors: "all",
                    caughtErrorsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    vars: "all",
                    varsIgnorePattern: "^_"
                }
            ],
            "import/no-unused-modules": [
                "error",
                {
                    unusedExports: true,
                    src: ["src/**/*.ts", "test/**/*.ts"],
                    ignoreExports: ["src/extension.ts"]
                }
            ]
        }
    })
];
