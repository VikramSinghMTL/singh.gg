const mdBiblatex = require('@arothuis/markdown-it-biblatex');

function userMarkdownSetup(md) {
	md.use(mdBiblatex, {
		bibPath: './library.bib',
		bibliographyTitle: '<h2 class="bibliography-title">References</h2>',
		appendBibliography: true,
	});
}

function userEleventySetup(eleventyConfig) {
	// The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
	// Feel free to add any plugin you want here instead of /.eleventy.js
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
