module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    env: {
        jest: true,
    },
    rules: {
        'global-require': 0,
        'object-curly-newline': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],
        'block-spacing': ['error', 'always'],
        'no-whitespace-before-property': ['error'],
        'eol-last': ['error', 'always'],
        'max-len': [
            'error',
            {
                code: 88,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'arrow-parens': ['error', 'always'],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 1,
                maxBOF: 0,
            },
        ],
    },
    globals: {
        fetch: false,
    },
}
