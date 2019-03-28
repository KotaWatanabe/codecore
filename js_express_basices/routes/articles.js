const express = require("express");
const router = express.Router();
const knex = require("../db/client");

// -= Article Routes =-

// NAME: article#index, METHOD: GET, PATH: /articles
router.get("/", (req, res) => {
    knex("articles")
      .orderBy("createdAt", "DESC")
      .then(articles => {
        //   res.send(articles);
        res.render("articles/index", { articles: articles });
      });
  });

// NAME: article#new, METHOD: GET, PATH: /articles/new
router.get("/new", (req, res) => {
  res.render("articles/new");
});

// NAME: article#create, METHOD: POST, PATH: /articles
router.post("/", (req, res) => {
    knex("articles")// --- START SQL
    .insert({
        title:req.body.title,
        content: req.body.content,
        viewCount: 0
    })
    .returning("*")// --- END SQL
    .then(data => {
        // get the first value because db data
        // always comes in an array
        const article = data[0];
        ///-- EXECUTE SQL
        res.redirect(`/articles/${article.id}`);
    });
  });

// NAME: article#show, METHOD: GET, PATH: /articles/:id
//            ð a wildcard match
router.get("/:id", (req, res) => {
    // In the path above, all the words prefixed with `:`
  // are called a wildcard. This wildcard allows access
  // the in that location of the URL.

  // You can retrieve values with "req.params". This is an object
  // similar to "req.query".
  // Examples:
  // /:id/:name/:job with url /100/Bob/Labourer
  // req.params === { id: "100", name: "Bob", job: "Labourer"}
  const id = req.params.id

  // req.query -> Query string ...?key=value&key1=value2
  // req.params -> Url params ... articles/:id/:name
  // req.body -> Posted form data .. input fields

  knex("articles")
    .where("id", id)
    .first()// when an array is returned as data, only return the first value
    .then(article => {
        if (article) {
            res.render("articles/show", { article: article });
          } else {
            res.send(`Cannot find article with id=${id}`);
          }
    });  
  });

module.exports = router;

