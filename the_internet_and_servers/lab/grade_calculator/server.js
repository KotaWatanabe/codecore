const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
const queryParams = url.parse(request.url, true).query;

  const score = parseFloat(queryParams.score);

  let grade ="";
  if(score>=80){
      grade ="A";
  }else if(score > 60){
      grade ="B";
  }
  else if(score > 50){
      grade ="C";
  }
  else if(score > 40){
      grade ="D";
  }
  else{
      grade ="F";
  }

  
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
      <h1>Grade calculator</h1>
      <form>
        <input type="int" name="score" placeholder="enter your score"/>
        <input type="submit" value="Submit" />
      </form>
      <p>Your score is: ${score}</p>
      <p>Your grade is: ${grade}</p>
    </body>
    </html>
  `);
  response.end();
});

const PORT = 4003;
const ADDRESS = "127.0.0.1";
server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning on http://${ADDRESS}:${PORT}`);
});
