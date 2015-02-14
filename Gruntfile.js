module.exports = function(g) {

    g.initConfig({
        //pkg: g.file.readJSON('package.json'),

        watch: {
            scripts: {
                options: {
                    livereload: true,
                    livereloadOnError: false
                },
                files: ['**/*.html', '**/*.css', '**/*.js']
            }
        }
    });

    g.loadNpmTasks('grunt-contrib-watch');

    g.registerTask('default', ['watch']);

};
