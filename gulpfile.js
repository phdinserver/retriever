const { task, series } = require('gulp'),
    { readdir, writeFile } = require('fs').promises,
    { sep } = require('path');

task('packets_create', () => {
    return readdir('./src/protocol/packet/')
        .catch(err => {
            console.error(`Gulp Error: ${err.toString()}`);
        }).then(names => {
            return writeFile('./src/protocol/packets.mjs', names.map(e => `export { default as ${e.split(sep).pop().split('.')[0]} } from './packet/${e.split(sep).pop()}';`).join('\n'));
        }).catch(err => {
            console.error(`Gulp Error: ${err.toString()}`);
        });
});

task('default', series('packets_create'));