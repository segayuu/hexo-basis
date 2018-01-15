import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [{
    // module
    input: 'lib/mjs/main.js',
    plugins: [ resolve(), commonjs() ],
    output: {
        file: 'source/js/main.m.js',
        format: 'es'
    }
}, {
    // no module
    input: 'lib/mjs/main.js',
    plugins: [ resolve(), commonjs(), babel() ],
    output: {
        file: 'source/js/main.js',
        name: 'hexoThemeBasis',
        format: 'iife'
    }
}];