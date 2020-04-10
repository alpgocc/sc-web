module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [0, 4],
        "semi": [0, "always"],
        "quotes": "off",
        "quote-props": "off",
        "no-unused-vars": "off",
        "no-unreachable": "off",
        "no-console": [1, { "allow": ["error", "log"] }],
        "no-class-assign": 1
    },
    "globals": {
        "Ext": false,
        "Qit": false,
        "react": false,
        "atmosphere": false,
        "test": false,
        "process": false,
        "date": false,
        "lindex": false,
        "__dirname": false,
        "it": false
    }
}