module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"jest",
		"react-hooks"
	],
	"overrides": [
		{
			"files": [
				"**/*.tsx"
			],
			"rules": {
				"react/prop-types": "off"
			}
		}
	],
	"rules": {
		"jest/no-large-snapshots": [
			"warn",
			{
				"maxSize": 12,
				"inlineMaxSize": 6
			}
		],
		"jest/prefer-to-have-length": "warn",
		"no-extra-semi": "warn",
		"no-unused-vars": "warn",
		"quotes": [
			"warn",
			"double"
		],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
		"semi": [
			"warn",
			"always"
		],
		"semi-style": [
			"warn",
			"last"
		]
	}
};
