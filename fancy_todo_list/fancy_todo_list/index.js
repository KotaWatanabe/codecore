// have to import our express app
const express = require('express');

// import our http logger
const logger = require('morgan');

// we're going to use cookies, we're going to need this module to parse that from the http request
const cookieParser = require('cookie-parser');

// this is the knex client we've defined in ./db/client
// this client connects this express application to to the database server running on your machine
// knex lets us use javascript to write SQL queries, send requests to the database, and recieve responses.
const knex = require('./db/client');

// initialize our express app
const app = express();

// setup our view engine (tells expres that our views should be interpreted as ejs)
app.set('view engine', 'ejs');

// https://expressjs.com/en/api.html#express.urlencoded
// please read the above resource to understand what urlencoded does
// TLDR: it parses HTTP requests and creates the request object that we use in our routes.
app.use(express.urlencoded({ extended: true }));


// https://expressjs.com/en/api.html#express.static
// please read the above resource to understand what express.static does
// TLDR: it creates a route that will respond with static assets (files) like css, images, javascript
app.use(express.static('public'));

// initialize the cookie parser middleware
// this middleware looks at the http request coming in
// parses any cookies it finds and puts it in the request.cookies object
app.use(cookieParser());


/**
 * @type {setLocalUsernameFromCookieMiddleware}
 * middleware to set req.cookies.username to locals (res.locals);
 */
app.use((req, res, next) => {
  res.locals.username = req.cookies.username || '';
  next()
})

// because of the app.use(express.urlencoded({ extended: true })); middleware our req object and req.body is populated.

app.get('/', (req, res) => {
  // because of our custom setLocalUsernameFromCookieMiddleware res.locals.username is populated
  res.render('home', { username: res.locals.username });
});

app.get('/todos', (req, res) => {
  res.render('home');
});

app.get('/todos/new', checkIfAuthenticated, (req, res) => {
  res.render('new_todo');
});

app.post('/todos', (req, res) => {
  // body = {
  //   content: 'the stuff from form',
  // }
  const { content } = req.body;
  knex.insert({
    // because of the app.use(cookieParser()); middleware our request.cookies object exists and is populated.
    username: req.cookies.username, 
    body: content 
  })
  .into('todo')
  .then((record) => {
    console.log('record created!!');
    res.redirect('/');
  }).catch((err) => {
    res.send('<div>sorry something went wrong</div>')
  })
});

app.get('/login', (req, res) => {
  res.render('login_page');
})



const ONE_DAY = new Date(Date.now() + 1*24*60*60*1000);

// when someobody submits a form on /login it will trigger a post request
// to this request handler because our form rendered in the login_page template
// has it's action set to '/login' with the method of 'POST'
app.post('/login', (req, res) => {
  // deconstructs the username property from the req.body object
  const { username } = req.body;
  // the long less-sugary way );
  // const username = req.body.username;

  // this will set a Set-Cookie header in the response sent back to the browser.
  // if browsers see this header it will set a cookie to the value of this header.
  res.cookie('username', username, { expires: ONE_DAY } )
  // respond by redirecting the client (browser) to the path '/'
  res.redirect('/');
})

const PORT = 4547;
const HOSTNAME = 'localhost';

app.listen(PORT, HOSTNAME, () => {
  console.log(`listening at ${HOSTNAME}:${PORT}`);
})

// middleware to check if a req.cookie.username is set
// will continue if so, else will redirect to '/login'
function checkIfAuthenticated(req, res, next) {
  // if req.cookies.username is falsey then we will redirect to '/login'
  if (!req.cookies.username) {
    res.redirect('/login');
  }
  // if we were not redirected then we continue onto our next middleware
  next();
}