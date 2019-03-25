const net = require('net');

const server = net.createServer(socket => {
    socket.on('data',data=>{
        let request = data.toString();
        console.log('Data received from client:' + request);
        let listOfNumbers = request.split(",");
        let largestNum = parseInt(listOfNumbers[0]);
        for(let i = 0; i < listOfNumbers.length;i++){
            if(parseInt(listOfNumbers[i])>largestNum){
                largestNum = parseInt(listOfNumbers[i]);
            }
        }
        socket.write(`${largestNum}`);

        //     request.split("");
        // // console.log('Response being sent back to client:' + response);
        // socket.write(response);
    })
})

server.listen(4002);
console.log('Server listening on port 4002')