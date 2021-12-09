module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    "standard",
    "react-app",
    "react-app/jest",
    "plugin:react/jsx-runtime"
  ],
  rules: {
    "indent": [
      "error",
      2
    ],
    "max-len": [
      "error",
      {
        "code": 120
      }
    ],
    "semi": [
      2,
      "always"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "function-paren-newline": [
      "error",
      "multiline"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/jsx-first-prop-new-line": [
      1,
      "multiline"
    ],
    "react/jsx-max-props-per-line": [
      1,
      {
        "maximum": 1,
        "when": "always"
      }
    ],
    "react/jsx-indent": [
      2,
      2
    ],
    "react/jsx-indent-props": [
      2,
      2
    ],
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-pascal-case": "error",
    "react/jsx-curly-spacing": [
      "error",
      "never"
    ],
    "react/jsx-tag-spacing": "error",
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "ignore"
      }
    ]
  }
};
