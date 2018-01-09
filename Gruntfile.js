const jsWatch = ['js/*.js'];

module.exports = function(grunt) {
    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            manage: false
          },
          my_target: {
            files : [{
              expand: true,
              src: ['js/*.js', 'js/*.js'],
              dest: 'dist/assets',
              cwd: '.'
            }]
          }
        },
        babel: {
          options: {
              sourceMap: false
          },
          dist: {
              files: [
                  {
                      expand: true,
                      cwd: 'js/',
                      src: '*.js',
                      dest: 'public/js/'
                  }
              ]
          }
        },
        watch: {
          js: {
              files: jsWatch,
              tasks: ['babel']
          }
        }
      });

    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

      // Default task(s).
    grunt.registerTask('dev', ['babel','watch']);
    grunt.registerTask('prod', ['uglify']);
};