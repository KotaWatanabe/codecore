const net = require("net");
const socket = net.Socket();

socket.on("data", data => {
  console.log(`  Server said: `, data.toString());

  if (data.toString().includes("Roger")) {
    // To terminate a connection between a server and a client
    // use the .end() method on the socket.
    socket.end();
  }
});

socket.connect(
  5000, // PORT
  "127.0.0.1", // IP ADDRESS
  () => {
    console.log("-+ Client Connected +-");

    // To send data through the socket connection,
    // use the method `socket.write(<data>)` with one
    // argument which is the object holding our data.
    socket.write(process.argv[2]);
  }
);
