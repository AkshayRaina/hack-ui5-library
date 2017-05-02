module.exports = function(grunt) {
	grunt.initConfig({
		openui5_preload: {
			library: {
				options: {
					resources: {
						cwd: 'WebContent',
						src: [
							'my/own/*.js'
						]
					},
					dest: 'WebContent',
					compress: true
				},
				libraries: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-openui5');
	grunt.registerTask('dev', []);
	grunt.registerTask('production', ['openui5_preload']);
};