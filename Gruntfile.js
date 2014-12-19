module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      files: 'src/**/*.*',
      tasks: ['less']
    },

    less: {
        targetname: {
          expand: true,
          flatten: true,
          src:  ['src/less/*.less'],
          dest: 'build/css/',
          ext: '.css'
        }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['watch']);

};