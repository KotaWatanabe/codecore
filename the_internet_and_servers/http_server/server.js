const http = require("http");
const url = require("url");

// When creating a server, we pass a callback that will
// be called when an HTTP client (e.g. a browser)
// makes to our server.

// http://localhost:3000/temp?celsius=90&name=Bob&job=Server
// scheme | host  | port | path | query (search)
const server = http.createServer((request, response) => {
  const queryParams = url.parse(request.url, true).query;

  console.log("Query Params:", queryParams);

  const fahrenheit = parseFloat(queryParams.temp);
  const celsius = ((fahrenheit - 32) / 9) * 5;

  response.writeHead(200);
  response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <form>
        <input type="text" name="temp" placeholder="In Fahrenheit"/>
        <input type="submit" value="Submit" />
      </form>

      <p>Fahrenheit: ${fahrenheit}</p>
      <p>Celsius: ${celsius}</p>
    </body>
    </html>
  `);
  response.end();
});

const PORT = 4000;
const ADDRESS = "127.0.0.1";
server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning on http://${ADDRESS}:${PORT}`);
});
