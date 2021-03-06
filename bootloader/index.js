define(['require', 'exports', '../index', '../bootloader'], function(require, exports, fs, bootLoader) {
	var Filesystem = fs.Filesystem;
	var BootLoader = bootLoader.BootLoader;
	
	exports.testFs = new Filesystem({
		root: {
			files: {
				
			}
		}
	});
	
	exports.bootLoader = new BootLoader(exports.testFs, function() {
		console.log('called api');
	}, {
		baseUrl: 'filesystem'
	}, function(main) {
		console.log('exports:', window.exports = exports.exports = main);
	});
	
	window.testFs = exports.testFs;
	window.bootLoader = exports.bootLoader;
});
