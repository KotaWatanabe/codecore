const net = require('net');

// create a server
const server = net.createServer(
  (socket) => {
    socket.on('data', data => {
      // turn the data buffer into a string;
      let request = data.toString();
      console.log('Data recieved from client: ' + request);
      // Capitalize the data recieved
      let response = request
        .charAt(0)
        .toUpperCase();
      response += data.slice(1);
      console.log('Response being sent back to client: ' + response);
      // Respond with the new data
      socket.write(response);
    })
  }
)

// make the server listen to any requests on port 4000
server.listen(4000);
console.log('Server listening on port 4000');