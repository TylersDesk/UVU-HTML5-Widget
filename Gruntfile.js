module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
  	  server: {
        options: {
          keepalive: true,
          base: 'public',
          port:8080
        }
      }
    },
    //Copy task to move files into the .wdgt directory
    copy: {
      main: {
        expand: true,
        cwd: 'public/',
        src: '**',
        dest: 'uvu-class-list.wdgt/',
        flatten: false,
        filter: 'isFile'
      }
    },
    clean: {
      build: ['uvu-class-list.wdgt']
    }
  });

  // Load the task to start a server
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Develop task(s).
  grunt.registerTask('develop', ['connect:server']);

  grunt.registerTask('build', ['clean:build','copy:main']);

};