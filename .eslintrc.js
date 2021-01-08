module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: "htmlacademy/es6",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "single"],
        semi: ["error", "always"],
    },
};