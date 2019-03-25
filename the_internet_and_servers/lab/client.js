const net = require('net');
const readline = require('readline');

// setup our CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create an instance of Socket
const client = net.Socket();

// When client (the socket we created) recieves data from the server
// that we are listening on log out the data and then kill this process

client.on('data', (data) => {
  console.log(`${data}`);
  // kills the process, basically same thing as closing the client
  process.exit();
  // closes the client
  // client.end();
});

// connect to the server running on port 4000 on our local machine
client.connect(4000, 'localhost', () => {
  rl.question('enter something to capitalize', (input) => {
    // function that sends data to the connected server in this case
    // it is the server defined in server.js running on the port 4000
    client.write(input);
  })
})