module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        compass: {
            adaptive: {
                options: {
                    sourcemap: true,
                    config: './samples/adaptive/config.rb',
                    basePath: './samples/adaptive',
                    bundleExec: true
                }
            },
            fixed: {
                options: {
                    sourcemap: true,
                    config: './samples/fixed/config.rb',
                    basePath: './samples/fixed',
                    bundleExec: true
                }
            },
            fluid: {
                options: {
                    sourcemap: true,
                    config: './samples/fluid/config.rb',
                    basePath: './samples/fluid',
                    bundleExec: true
                }
            },
            nested: {
                options: {
                    sourcemap: true,
                    config: './samples/nested/config.rb',
                    basePath: './samples/nested',
                    bundleExec: true
                }
            },
            prefixsuffix: {
                options: {
                    sourcemap: true,
                    config: './samples/prefixsuffix/config.rb',
                    basePath: './samples/prefixsuffix',
                    bundleExec: true
                }
            },
            pushpull: {
                options: {
                    sourcemap: true,
                    config: './samples/pushpull/config.rb',
                    basePath: './samples/pushpull',
                    bundleExec: true
                }
            },
            responsive: {
                options: {
                    sourcemap: true,
                    config: './samples/responsive/config.rb',
                    basePath: './samples/responsive',
                    bundleExec: true
                }
            },
            rtl: {
                options: {
                    sourcemap: true,
                    config: './samples/rtl/config.rb',
                    basePath: './samples/rtl',
                    bundleExec: true
                }
            }
        },

        focus: {
            watch: {
                // grunt-focus is the 'only' way I found to watch and compile
                // multiple SCSS dirs (themes) with a single command inside the
                // base theme.
                include: ['adaptive', 'fixed', 'fluid', 'nested', 'prefixsuffix', 'pushpull', 'responsive', 'rtl']
            }
        },

        watch: {
            adaptive: {
                files: './samples/adaptive/scss/**/*.scss',
                // Each theme will need to be added here
                tasks: ['compass:adaptive']
            },
            fixed: {
                files: './samples/fixed/scss/**/*.scss',
                tasks: ['compass:fixed']
            },
            fluid: {
                files: './samples/fluid/scss/**/*.scss',
                tasks: ['compass:fluid']
            },
            nested: {
                files: './samples/nested/scss/**/*.scss',
                tasks: ['compass:nested']
            },
            prefixsuffix: {
                files: './samples/prefixsuffix/scss/**/*.scss',
                tasks: ['compass:prefixsuffix']
            },
            pushpull: {
                files: './samples/pushpull/scss/**/*.scss',
                tasks: ['compass:pushpull']
            },
            responsive: {
                files: './samples/responsive/scss/**/*.scss',
                tasks: ['compass:responsive']
            },
            rtl: {
                files: './samples/rtl/scss/**/*.scss',
                tasks: ['compass:rtl']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-focus');

    // Default task watches everything
    grunt.registerTask('default', ['focus:watch']);
}
