module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    prettify: {
      options: {
        condense:true,
        indent: 4,
        indent_char: ' ',
        wrap_line_length: 0,
        brace_style: 'expand',
        unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
      },
      all: {
        expand: true,
        cwd: '',
        ext: '.html',
        src: ['*.html'],
        dest: ''
      },
    },
    compass: {
      dist: {
        options: {
          raw: 'require "font-awesome-sass"\n require "bootstrap-sass"\n require "compass/import-once/activate"\n',
          sassDir:'sass',
          cssDir:'css',
          httpPath:'/',
          imagesDir:'images',
          javascriptsDir:'js',
          outputStyle:'compressed'
          //outputStyle:'expanded'
        }
      }
    },
    uglify: {
      options: {
        mangle:true,
        compress:true
      },
      build: {
        src:['js/partials/_*.js'],
        dest:'js/global.min.js'
      }
    },
    watch: {
      scripts: {
        files:['js/partials/_*.js'],
        tasks:['uglify'],
        options: {
          spawn:false,
          livereload:true
        },
      },
      css: {
        files:['sass/*.scss'],
        tasks:['compass'],
        options: {
          spawn:false,
          livereload:true
        }
      },
      html: {
        files:['*.html'],
        tasks:['prettify'],
        options: {
          spawn:false,
          livereload:true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-prettify');

  grunt.registerTask('default', ['compass', 'uglify', 'prettify']);
};
