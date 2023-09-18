module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{jpg,css,js,svg,png,ico,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};