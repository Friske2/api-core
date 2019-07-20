module.exports = {
    env: {
       "jest": true
    },
    // Standard JavaScript Style Guide
    extends: ["standard", "plugin:prettier/recommended"],
    rules: {
       "prettier/prettier": ["error", { "singleQuote": true }]
    }
 };