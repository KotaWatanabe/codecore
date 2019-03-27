const express = require("express");
const path = require("path");
const logger = require("morgan");
// Requiring the "express" package
// returns a function that creates an instance
// of the express application.
const app = express(); // http.createServer(...)

app.set("view engine", "ejs");

// -= MIDDLEWARE =-

// LOGGER
// When using the "morgan" middleware, call it with
// a string that describes the formatting of the logs.
// Find out more here:
// https://github.com/expressjs/morgan
app.use(logger("dev"));

// STATIC ASSETS
// `__dirname` is a global variable available in Node that returns
// the full directory path beginning from root (i.e. /) to
// the location of the file where it used.
console.log("__dirname:", __dirname);

app.use(express.static(path.join(__dirname, "public")))

// URL (Uniform Resource Locator)
// URL http://localhost:4545/hello_world
//   scheme | host  | port | path

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

app.get("/", (request, response) => {
  // `response.render(<ejs-file-path>)`
  // Render an template located in "views/" + <ejs-file-path>.
  // When writing the file path, you can omit the extension.

  // In the call below, the file at "./views/welcome.ejs" is
  // rendered as HTML and is sent as the body of the HTTP response
  // by our Express server. Just like `response.send(<data>)`,
  // `response.render(<file-path>)` terminates response by sending to
  // to the client.
  response.render("welcome");
});

app.get("/contact_us", (request, response) => {
  console.log("URL Query:", request.query);
  response.render("contactUs");
});

// http://localhost:4545/contact_us?fullName=Steve&message=code+%26+stuff
// scheme | host | port | path     | query (search)

// The "query" in the URL is a way to encode data as key-value
// pairs in the URL itself. It used by forms to store data from
// its inputs for example. This called URL encoding.

// The encoding format is as follows:
// ?key_1=value_1&key_2=value_2&key_3=value_3
// Express takes a query from a URL and converts into
// an object as follows:
// { key_1: "value_1", key_2: "value_2", key_3: "value_3"}

app.get("/thank_you", (request, response) => {
  // `request.query` is a property that holds an object
  // representation of the URL query.

  const fullName = request.query.fullName;
  const favouriteColour = request.query.favouriteColour;
  const message = request.query.message;

  // `response.send(...)` is helpful when debugging if you
  // see the contents of object in your browser. Use it
  // like you would use `console.log(...)`
  // response.send(request.query);

  response.render("thankYou", {
    fullName: fullName,
    favouriteColour: favouriteColour,
    favouriteDay: request.query.favouriteDay,
    message: message
  });
});

const PORT = 4545;
const ADDRESS = "localhost"; // 127.0.0.1
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
