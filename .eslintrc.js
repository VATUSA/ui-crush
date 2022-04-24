module.exports = {
	extends: [
		'next/core-web-vitals',
		'airbnb',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	overrides: [
		{
			files: ['*.test.js', '*.test.jsx'],
			env: {
				jest: true,
			},
		},
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 1 : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 'off',

		// You need like 8 rules to force tabs. I have no idea why people are so obsessed with spaces.
		'@typescript-eslint/indent': [2, 'tab'],
		'no-tabs': [2, { allowIndentationTabs: true }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		indent: [0],
		// Quotes should be singles unless very specific circumstances are met.
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		// Format stuffs
		'arrow-body-style': [2, 'as-needed'],
		'max-len': [0],
		// React
		'react/react-in-jsx-scope': [0],
		'react/function-component-definition': [0],
		'react/jsx-props-no-spreading': [0],
		'react/require-default-props': [0],
		'react/prop-types': [0],
	},
};
