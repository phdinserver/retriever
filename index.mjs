import net from 'net';
import ProtocolManager from './protocol/ProtocolManager.mjs';

const retriever = net.createServer(client => {
    client.setEncoding('utf-8')
        .on('data', data => {
            console.log(ProtocolManager.factory(data));
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
