module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      files: 'src/**/*.*',
      tasks: ['less', 'copy']
    },

    copy: {
        main: {
            files: [
                {expand: true, cwd: "src/", src: 'index.html', dest: 'build/'},
                {expand: true, cwd: "src/images/", src: '**', dest: 'build/images/'},
                {expand: true, cwd: "lib/bootstrap/fonts/", src: '**', dest: 'build/fonts/'},
                {expand: true, cwd: "src/fonts/", src: '**', dest: 'build/fonts/'},
            ]
        }
    },

    less: {
        main: {
          expand: true,
          flatten: true,
          src:  ['src/less/*.less'],
          dest: 'build/css/',
          ext: '.css'
        }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['watch']);

};