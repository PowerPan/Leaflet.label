var deps = {
	Core: {
		src: [
			'leaflet-tracksymbol-label.js'
		],
		desc: 'The core of the plugin. Currently only includes the version.'
	},

	Label: {
		src: [
			'Label.js',
			'Map.Label.js',
			'Path.Label.js',
		],
		desc: 'leaflet-tracksymbol-label plugin files.',
		deps: ['Core']
	}
};

if (typeof exports !== 'undefined') {
	exports.deps = deps;
}