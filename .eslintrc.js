module.exports = {
	extends: '@debitoor/eslint-config-debitoor',
	parser: 'babel-eslint',
	plugins: ['react', 'react-native', 'jest', 'no-only-tests'],
	globals: {
		__DEV__: 1,
		Promise: 1,
		FormData: 1,
		fetch: 1,
		expect: 1,
		sinon: 1,
		testUtils: 1,
		testConfig: 1,
		jest: 1,
		beforeAll: 1,
		afterAll: 1,
		before: 1,
		after: 1,
		jasmine: 1
	},
	env: {
		node: true,
		es6: true,
		jest: true
	},
	rules: {
		curly: [2, 'all'],
		eqeqeq: [
			2,
			'always',
			{
				null: 'ignore'
			}
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'no-unused-vars': [
			'error',
			{
				varsIgnorePattern: 'React',
				argsIgnorePattern: 'e',
				vars: 'all',
				args: 'after-used'
			}
		],
		'no-undef': 'error',
		'no-trailing-spaces': 2,
		'no-cond-assign': 2,
		'no-constant-condition': 'error',
		'no-control-regex': 2,
		'no-empty-character-class': 2,
		'no-invalid-regexp': 2,
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': 2,
		'no-negated-in-lhs': 2,
		'no-irregular-whitespace': 2,
		'no-obj-calls': 2,
		'no-sparse-arrays': 2,
		'no-unexpected-multiline': 2,
		'no-unreachable': 2,
		'use-isnan': 2,
		'valid-typeof': 2,
		'space-infix-ops': 'error',
		'max-len': [
			0,
			140,
			{
				ignoreStrings: true,
				ignoreComments: true
			}
		],

		'no-var': 2,
		'arrow-spacing': 2,
		'constructor-super': 2,
		'no-duplicate-imports': 2,
		'no-useless-constructor': 2,
		'object-shorthand': 2,
		'prefer-arrow-callback': 2,

		'react/jsx-uses-vars': 2,
		'react/jsx-indent': [2, 'tab'],
		'react/no-multi-comp': [
			2,
			{
				ignoreStateless: true
			}
		],
		'react/jsx-indent-props': [2, 'tab'],

		'no-only-tests/no-only-tests': 2
	}
};
