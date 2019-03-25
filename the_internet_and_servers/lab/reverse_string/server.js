const net = require('net');

const server = net.createServer(socket => {
    socket.on('data',data=>{
        let request = data.toString();
        console.log('Data received from client:' + request);
        let response = request
        .split("")
        .reverse()
        .join("");
        console.log('Response being sent back to client:' + response);
        socket.write(response);
    })
})

server.listen(4001);
console.log('Server listening on port 4001')