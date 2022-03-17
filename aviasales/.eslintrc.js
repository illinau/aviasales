module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
    plugins: [
        'babel',
        'import',
        'jsx-a11y',
        'react',
        'prettier',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        '@typescript-eslint/class-name-casing': 0,
        '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'no-underscore-dangle': 0,
        'react-hooks/rules-of-hooks': 0,
        'no-eval': ['error', { allowIndirect: true }],
        'valid-jsdoc': ['error', { matchDescription: '.+' }],
        'import/prefer-default-export': 0,
        'function-paren-newline': 0,
        'no-use-before-define': 0,
        'no-shadow': 0,
        'operator-linebreak': [
            'error',
            'after',
            { overrides: { '?': 'before', ':': 'before' } },
        ],
        'class-methods-use-this': 0,
        'implicit-arrow-linebreak': 0,
        'no-mixed-operators': ['error', { allowSamePrecedence: true }],
        'arrow-parens': ['error', 'as-needed'],
        'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
        camelcase: 0,
        'sort-class-members/sort-class-members': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/destructuring-assignment': 0,
        "react/no-unused-prop-types": 1,
        "react/no-unused-state": 1,
        'react/prop-types': 0,
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true,
            },
        ],
        'no-param-reassign': 0,
        "jsx-a11y/label-has-for": [ "error", {
            "required": {
                "some": [ "nesting", "id"  ]
            }
        }]
    },
    "overrides": [
        {
            "files": ["*.jsx", "*.js"]
        }
    ],
};