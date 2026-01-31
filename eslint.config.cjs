const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
});

module.exports = [
    {
        ignores: ["node_modules/**", "out/**", ".vscode-test/**", "coverage/**"]
    },
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
            sourceType: "module",
            project: "./tsconfig.json"
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
            "max-params": ["error", 5],
            "max-lines-per-function": ["error", { max: 100 }],
            "max-depth": ["error", 4],
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
            ],
            "@typescript-eslint/no-shadow": "error",
            eqeqeq: ["error", "always", { null: "ignore" }],
            "@typescript-eslint/switch-exhaustiveness-check": "error",
            "no-console": "error",
            "@typescript-eslint/no-empty-object-type": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-deprecated": "error",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/no-floating-promises": "error"
        },
        overrides: [
            {
                files: ["src/**/*.ts", "test/**/*.ts"],
                parserOptions: {
                    project: "./tsconfig.json"
                }
            },
            {
                files: ["eslint.config.cjs"],
                env: { node: true },
                parserOptions: { sourceType: "script" }
            },
            {
                files: ["test/**/*.ts"],
                rules: {
                    "max-lines-per-function": ["error", { max: 250 }],
                    "@typescript-eslint/require-await": "off"
                }
            }
        ]
    })
];
