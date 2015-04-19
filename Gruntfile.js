module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      files: 'src/**/*.*',
      tasks: ['jshint', 'less', 'copy']
    },

    jshint: {
      dev: {
        src: ['src/js/**/*.js']
      }
    },

    concat: {
      main: {
        src: [
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'node_modules/angular-filter/dist/angular-filter.js',

            'src/js/*.js',
            'src/js/**/*.js',
        ],
        dest: 'build/js/app.js'
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: "src/", src: 'index.html', dest: 'build/'},
          {expand: true, cwd: "src/images/", src: '**', dest: 'build/images/'},
          {expand: true, cwd: "src/templates/", src: '**', dest: 'build/templates/'},

          {expand: true, cwd: "node_modules/bootstrap/fonts/", src: '**', dest: 'build/fonts/'},
          {expand: true, cwd: "node_modules/font-awesome/fonts/", src:'**', dest: 'build/fonts/'}
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

    connect: {
      server: {
        options: {
          open: true,
          base: 'build',
          keepalive: true,
          useAvailablePort: true,
        }
      }
    },

    clean: {
      build: {
        src: ["build/*"]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['jshint', 'less', 'copy', 'concat']);
  grunt.registerTask('serve', ['build', 'connect:server']);
  grunt.registerTask('release', ['clean', 'build']);
};