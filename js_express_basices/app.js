const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const rootRouter = require("./routes/root")
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

// URLENCODED

// This middleware will decode data coming from forms
// that been POSTed (using the POST HTTP verb.)

// When the "extended" option is set to `true`, it allows
// forms post data in the shape of an array and/or object. If
// set to false, it can only accept data in the shape a string.
app.use(express.urlencoded({ extended: true }));

// It will make the form data available as a property of request.
// It will be `request.body` instead of `request.query`.

// COOKIER PARSER
app.use(cookieParser());

// STATIC ASSETS
// `__dirname` is a global variable available in Node that returns
// the full directory path beginning from root (i.e. /) to
// the location of the file where it used.
console.log("__dirname:", __dirname);

// The static assets middleware will make all files and directories
// inside the specified path accessible by a URL beginning from
// the host.
// Examples:
// ./public/pic.png -> http://localhost:4545/pic.png
// ./public/styles/main.css -> http://localhost:4545/styles/main.css
app.use(express.static(path.join(__dirname, "public")));

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

// CUSTOM MIDDLEWARE
app.use((request, response, next) => {
  // Read cookies from the request with
  // `request.cookies`. It's a plain object
  // where each key corresponds to the name of a cookie.
  // This is only available when "cookie-parser" is installed
  // and setup.
  console.log("ðª Cookies:", request.cookies);

  // Set properties on `response.locals` to create variables
  // that are global to all of our rendered templates
  // including any partial.
  // The following line means that a variable named "username"
  // with a value of "" will useable in our templates.
  response.locals.username = "";

  const username = request.cookies.username;

  if (username) {
    response.locals.username = username;
  }

  // The third argument this callback (or middleware function)
  // is a function typically named "next". When called,
  // it tells Express that his middleware has completed work and
  // to move on to the next middleware.
  next();
});

// -= ROUTERS =-

app.use("/", rootRouter);

const PORT = 4545;
const ADDRESS = "localhost"; // 127.0.0.1
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
