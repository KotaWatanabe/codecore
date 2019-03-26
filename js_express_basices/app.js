const express = require("express");
const logger = require("morgan");
// Requiring the "express" package
// returns a function that creates an instance
// of the express application.
const app = express(); // http.createServer(...)

// -= MIDDLEWARE =-

// LOGGER
// When using the "morgan" middleware, call it with
// a string that describes the formatting of the logs.
// Find out more here:
// https://github.com/expressjs/morgan
app.use(logger("dev"));

// URL (Uniform Resource Locator)
// URL http://localhost:4545/hello_world
//   scheme | address  | port | path
//          |     host        |

// The "scheme" identifies the protocol being
// used to communicate. Could be HTTP, HTTPS,
// SSH, FTP, TCP, WS, SMTP, etc.

// The "host" combines the address and port. It identifies
// the location of the server hosting the website.

// The "path" identifies a specific web page (a resource)
// on a server.

// -= ROUTES =-

// A route is a function that creates a response
// for a specific combination of HTTP VERB (method) and
// URL PATH.

// The following method "get" is named after the
// HTTP VERB. There is a similar method for each
// verb (e.g. GET, POST, PUT, PATCH, DELETE, OPTION, etc.)
// It's arguments are in order:
//  - The URL path to match this route.
//  - A callback function that is passed
//    a request and a response object. This function
//    must end the response.
app.get("/hello_world", (request, response) => {
  // The "request" is an object that represents
  // the HTTP request made by the a client (i.e. browser.)
  // It contains the HTTP headers, any data, the URL, the verb, etc.

  // The "response" is an object that represents the server's
  // response to the client. We build the response ourselves
  // by calling methods on this object. We can specify
  // data to be sent (e.g. HTML, files, etc.), the HTTP
  // headers and the status code.

  // The method "send" of "response" takes a string
  // and adds it to the response's body, then terminates
  // the response sending it to the client.
  response.send("Hello, World!");
});

const PORT = 4545;
const ADDRESS = "localhost"; // 127.0.0.1
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
