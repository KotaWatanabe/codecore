const express = require("express");
const router = express.Router();
// The "router" created above is only the part of an Express that is
// used for routing. This let us seperate our routes into different files.

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
router.get("/hello_world", (request, response) => {
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
  
 router.get("/", (request, response) => {
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
  
 router.get("/contact_us", (request, response) => {
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
  
 router.get("/thank_you", (request, response) => {
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
  
  const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
 router.post("/sign_in", (request, response) => {
    // `request.body` is only available if the "urlencoded"
    // middleware is setup. It will contain data from
    // a form submitted via POST.
    const username = request.body.username;
  
    // `response.cookie(<cookie-name>, <cookie-value>, <options>)`
    // The above method is added to the response by the "cookie-parser"
    // middleware. Use it to send cookies to the browser.
    // The arguments are in order:
    // - A string that is the name of the cookie
    // - A value for the cookie
    // - (optional) options for the cookie
    response.cookie("username", username, { maxAge: COOKIE_MAX_AGE });
  
    // Like `response.send` and `response.render`, `response.redirect`
    // terminates the response. It sets a redirect statux code (e.g. 3XX, 301, 302, etc.)
    // and it also sets location (i.e. URL.) When the browser receives a
    // redirect response, it makes a follow-up request to the provided
    // location. In this case, the browser is sent to our welcome page (i.e. "/")
    response.redirect("/");
  });
  
 router.post("/sign_out",(request,response)=>{
    response.clearCookie("username");
  
    response.redirect("/");
  });

  module.exports = router;