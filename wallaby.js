var babel = require('babel');

module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js'
        ],

        tests: [
            'tests/*.test.js'
        ],

        preprocessors: {
            '**/*.js': file => require('babel').transform(file.content, {sourceMap: true})
        },

        env: {
            // use 'node' type to use node.js or io.js
            type: 'node',

            // if runner property is not set, then wallaby.js embedded node/io.js version is used
            // you can specifically set the node version by specifying 'node' (or any other command)
            // that resolves your default node version or just specify the path
            // your node installation, like

            // runner: 'node'
            // or
            // runner: 'path to the desired node version'

            params: {
                runner: '--harmony',
                env: 'PARAM1=true;PARAM2=false'
            }
        },

        bootstrap: function () {
            global.regeneratorRuntime = require('babel-runtime/regenerator').default;
        }
    }
};