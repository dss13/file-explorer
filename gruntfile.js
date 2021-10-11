module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                  // includes files within path
                    {
                        expand: true,
                        cwd: 'node_modules/react/umd/',
                        src: '**', 
                        dest: 'ui/js/react/', 
                        filter: 'isFile',
                        flatten: true,
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/react-dom/umd/',
                        src: '**',
                        dest: 'ui/js/react-dom/', 
                        filter: 'isFile',
                        flatten: true,
                    }
                ],
            },
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ["env", "react"]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'ui/react/',
                    src: ['*.js'],
                    dest: 'generated/',
                    ext: '.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['copy', 'babel']);
}