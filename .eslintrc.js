module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        "import/resolver": { typescript: {} },
        react: { pragma: "React", version: "detect" },
    },
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
        "prettier/prettier",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint", "jsx-a11y", "react", "prettier"],
    rules: {
        "prettier/prettier": ["error", {}, { endOfLine: "auto" }],
        "no-duplicate-imports": ["error", { includeExports: true }],
        "no-template-curly-in-string": "warn",
        camelcase: ["error", { properties: "always" }],
        "default-case": "warn",
        "no-lone-blocks": "error",
        "prefer-const": "warn",
        yoda: "error",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-exports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/method-signature-style": "warn",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "function",
                format: ["PascalCase", "camelCase"],
            },
        ], // avoid react component naming warning
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-useless-empty-export": "warn",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"], // overwrite base no-redeclare eslint
        "no-shadow": ["error", { hoist: "all" }],
        "@typescript-eslint/no-shadow": ["error", { hoist: "all" }], // overwrite base no-shadow eslint
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["error"], // overwrite base no-unused-expressions eslint
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                variables: false,
            },
        ], // overwrite base no-use-before-define eslint
        "react/boolean-prop-naming": ["error", { validateNested: true }],
        "react/button-has-type": "warn",
        "react/no-array-index-key": "warn",
        "react/no-unstable-nested-components": "error",
        "react/no-unused-prop-types": "warn",
        "react/no-unused-state": "warn",
        "react/self-closing-comp": "warn",
        "react/jsx-no-constructed-context-values": "warn",
        "react/jsx-no-leaked-render": ["warn", { validStrategies: ["ternary", "coerce"] }],
    },
};
