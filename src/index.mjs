import net from 'net';
import { process } from './handler/mainhandler.mjs';

const retriever = net.createServer(client => {
    client.on('data', data => {
            process(data, client);
        }).on('error', err => {
            console.error(`Client Error: ${err.toString()}`);
        }).on('end', () => {
            console.log('Client End');
        }).on('timeout', () => {
            console.log('Client Timeout');
        })
});

retriever.on('error', err => {
    console.error(`Server Error: ${err.toString()}`);
}).on('close', () => {
    console.log('Server Close');
}).listen(9876, 'localhost', () => {
    console.log('Server Listening');
});
