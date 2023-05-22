module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'airbnb-base',
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint'],
	rules: {},
	ignorePatterns: ['.eslintrc.cjs'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
				// use <root>/path/to/folder/tsconfig.json
				project: './tsconfig.json',
			},
		},
	},
	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			files: ['./**/*.{ts,tsx}'],
			rules: {
				'@typescript-eslint/require-await': 'off',
				'class-methods-use-this': 'off',
				'import/extensions': 'off',
				'import/prefer-default-export': 'off',
				'no-restricted-syntax': 'off',
				'no-use-before-define': 'off',
				'no-param-reassign': 'off',
				'no-underscore-dangle': 'off',
				'no-return-assign': 'off',
				'linebreak-style': 'off',
				'no-tabs': 'off',
				indent: 'off',
				semi: 'off',
				'object-curly-newline': 'off',
				'no-console': 'off',
			},
		},
	],
}
