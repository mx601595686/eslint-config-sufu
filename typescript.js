/**
 * Typescript Lint规则
 */
module.exports = {
    root: true,
    noInlineConfig: true,
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        //潜在错误分析
        'for-direction': 'off',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-debugger': 'warn',
        'no-empty': ['warn', { allowEmptyCatch: true }],
        'no-import-assign': 'warn',
        'no-inner-declarations': 'off',
        'no-irregular-whitespace': ['warn', { skipStrings: false }],
        'no-prototype-builtins': 'off',
        'require-atomic-updates': 'off',

        //最佳实践
        'curly': ['warn', 'multi-or-nest'],
        'dot-location': ['warn', 'property'],
        'dot-notation': 'warn',
        'eqeqeq': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'off',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'off',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-lone-blocks': 'warn',
        'no-multi-spaces': ['warn', { ignoreEOLComments: true, exceptions: { Property: false } }],
        'no-new-wrappers': 'error',
        'no-octal': 'off',
        'no-proto': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
        'no-useless-call': 'warn',
        'no-useless-catch': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'warn',
        'wrap-iife': ['warn', 'inside'],

        //变量
        'no-label-var': 'error',

        //ES6
        'arrow-body-style': 'warn',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'warn',
        'generator-star-spacing': 'warn',
        'no-duplicate-imports': ['warn', { includeExports: true }],
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': 'error',
        'no-var': 'off',
        'object-shorthand': 'warn',
        'prefer-const': 'warn',
        'rest-spread-spacing': 'warn',
        'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: true }],
        'symbol-description': 'error',
        'template-curly-spacing': 'warn',
        'yield-star-spacing': 'warn',

        //代码样式
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': 'warn',
        'block-spacing': 'warn',
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-dangle': 'warn',
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'func-call-spacing': 'warn',
        'indent': ['warn', 4, { SwitchCase: 1, ignoreComments: true }],
        'jsx-quotes': 'warn',
        'key-spacing': 'warn',
        'keyword-spacing': 'warn',
        'linebreak-style': 'warn',
        'multiline-comment-style': 'warn',
        'new-parens': 'warn',
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'no-new-object': 'error',
        'no-unneeded-ternary': 'warn',
        'no-whitespace-before-property': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'operator-linebreak': ['warn', 'after'],
        'quote-props': ['warn', 'as-needed'],
        'quotes': ['warn', 'single', { avoidEscape: true }],
        'semi': ['warn', 'always', { omitLastInOneLineBlock: true }],
        'semi-spacing': 'warn',
        'semi-style': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'spaced-comment': 'warn',
        'switch-colon-spacing': 'warn',
        'template-tag-spacing': 'warn',

        //typescript
        '@typescript-eslint/array-type': 'warn',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true }],
        '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
        '@typescript-eslint/generic-type-naming': ['warn', '^[A-Z]$'],
        '@typescript-eslint/interface-name-prefix': ['warn', { prefixWithI: 'always', allowUnderscorePrefix: false }],
        '@typescript-eslint/member-naming': ['warn', { private: '^_', protected: '^_', public: '^[^_]' }],
        '@typescript-eslint/member-ordering': ['warn', {
            default: [
                'private-static-field',
                'protected-static-field',
                'public-static-field',

                'private-static-method',
                'protected-static-method',
                'public-static-method',

                'private-abstract-field',
                'protected-abstract-field',
                'public-abstract-field',

                'private-abstract-method',
                'protected-abstract-method',
                'public-abstract-method',

                'private-instance-field',
                'protected-instance-field',
                'public-instance-field',

                'private-constructor',
                'protected-constructor',
                'public-constructor',

                'private-instance-method',
                'protected-instance-method',
                'public-instance-method',
            ]
        }],
        '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-this-alias': ['warn', { allowedNames: ['_this'] }],
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used', caughtErrors: 'all' }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/require-await': 'off'
    }
};
