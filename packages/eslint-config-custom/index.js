module.exports = {
  extends: ["standard-with-typescript", "turbo", "prettier"],
  rules: {
    "react/jsx-key": "off",
  },
  ignorePatterns: ['dist/**'],
  parserOptions: {
    project: './tsconfig.json'
  }
};