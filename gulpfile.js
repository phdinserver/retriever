const { task, series } = require('gulp'),
    fs = require('fs'),
    { promisify } = require('util'),
    { sep } = require('path');

const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

task('packets_create', () => {
    return readdir('./protocol/packet/')
        .catch(err => {
            console.error(`Gulp Error: ${err.toString()}`);
        }).then(names => {
            return writeFile('./protocol/packets.mjs', names.map(e => `export * from './packet/${e.split(sep).pop()}';`).join('\n'));
        }).catch(err => {
            console.error(`Gulp Error: ${err.toString()}`);
        });
});

task('default', series('packets_create'));