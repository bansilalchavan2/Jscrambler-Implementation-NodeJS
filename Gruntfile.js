
module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jscrambler: {
        main: {
          options: {
            keys: {
              accessKey: '1DA0E0A36438419C329E9CEABA974D037BAC2E4D',
              secretKey: 'D0F136D62DDB214932CA861F774733FE7CCDD956'
            },
            applicationId: '640aeb13d866e1001148873e',
            params: [
                // {
                //     "name": "objectPropertiesSparsing"
                //   },
                //   {
                //     "name": "variableMasking"
                //   },
                //   {
                //     "name": "whitespaceRemoval"
                //   },
                //   {
                //     "name": "identifiersRenaming",
                //     "options": {
                //       "mode": "SAFEST"
                //     }
                //   },
                //   {
                //     "name": "dotToBracketNotation"
                //   },
                //   {
                //     "name": "stringConcealing"
                //   },
                //   {
                //     "name": "functionReordering"
                //   },
                //   {
                //     "options": {
                //       "freq": 1,
                //       "features": [
                //         "opaqueFunctions"
                //       ]
                //     },
                //     "name": "functionOutlining"
                //   },
                //   {
                //     "name": "propertyKeysObfuscation",
                //     "options": {
                //       "encoding": [
                //         "hexadecimal"
                //       ]
                //     }
                //   },
                //   {
                //     "name": "regexObfuscation"
                //   },
                //   {
                //     "name": "booleanToAnything"
                //   }
                ]
          },
          files: [
            {expand: true, src: ['app.js'], dest: 'dist/'},
          ]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-jscrambler');
    
    
    grunt.registerTask('default', ['jscrambler']);
    
  };