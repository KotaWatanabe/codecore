// Single Page Application

// When you using fetch, you are only able to make
// requests to your sites domain unless another site
// gives your requests permission. This is a security
// implemented in Browser and is not applicable anywhere.

// To allow CORS in Rails, you need to do the following:
// 1. Add the "rack-cors" gem
// 2. Configure it in `config/application.rb`
// 3. See related Rails commit

// To setup a simple HTTP server to serve a directory as static
// assets, do the following:
// 1. Install `http-server` package globally: `npm i -g http-server`
// 2. Run the command in your project `http-server -p 3030 .`

// There are several conditions that must be met to share
// cookies with AJAX across domains:
// 1. Your website must be served by server.
// 2. You must add the option `credentials: "include"`
//    to your `fetch` calls.
// 3. The server must only allow your specific
//    as opposed to all domains with `*`.
// 4. The server must be set to allow credentials sharing
//    for that CORS resource.
// (See Rails commit for 3 & 4)

const BASE_URL = `http://localhost:3000/api/v1`;

// Requests
const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`, {
      // Makes include cookies in request and response for
      // cross-origin requests.
      credentials: "include"
    }).then(res => res.json());
  },
  async one(id) {
    // return await (await fetch(`${BASE_URL}/questions/${id}`)).json();
    const res = await fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include"
    });
    const question = await res.json();
    return question;
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

// Views
const viewQuestionListItems = questions => {
  return questions
    .map(
      q => `
      <li>
        <a class="question-link" data-id="${q.id}" href="">
          ${q.title}
        </a>
      </li>
    `
    )
    .join("");
};

const viewQuestionDetails = question => {
  return `
    <h1>${question.title}</h1>
    <p>
      ${question.body} <br/>
      <small>By ${question.author.full_name}</small>
    </p>

    <h3>Answers</h3>
    <ul>
      ${question.answers.map(a => `<li>${a.body}</li>`).join("")}
    </ul>
  `;
};

// Utilities

const navigateTo = pageId => {
  document.querySelectorAll(".page.current").forEach(node => {
    node.classList.remove("current");
  });

  document.querySelector(`.page#${pageId}`).classList.add("current");
};

// To do DOM manipulation, wait for the DOM fully loaded
// with the "DOMContentLoaded" event.
document.addEventListener("DOMContentLoaded", () => {
  const questionListUl = document.querySelector(".question-list");
  const questionShowMain = document.querySelector("#question-show");
  const navbar = document.querySelector("header > nav");
  const newQuestionForm = document.querySelector("#new-question-form");


  Question.all().then(questions => {
    questionListUl.innerHTML = viewQuestionListItems(questions)
  });

  questionListUl.addEventListener("click", event => {
    const questionLinkNode = event.target.closest(".question-link");

    if (questionLinkNode) {
      event.preventDefault();
      const id = questionLinkNode.getAttribute("data-id");

      Question.one(id).then(question => {
        questionShowMain.innerHTML = viewQuestionDetails(question);
        navigateTo("question-show");
      });
    }
  });

  navbar.addEventListener("click", event => {
    const navLink = event.target.closest("a");

    if (navLink) {
      event.preventDefault();
      const targetPage = navLink.getAttribute("data-target");

      navigateTo(targetPage);
    }
  });

  newQuestionForm.addEventListener("submit", async event => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    await Session.create({
      email: "js@winterfell.gov",
      password: "supersecret"
    });

    // data -> {id: 786}
    const data = await Question.create({
      title: formData.get("title"),
      body: formData.get("body")
    });

    const question = await Question.one(data.id);

    currentTarget.reset();
    questionShowMain.innerHTML = viewQuestionDetails(question);
    navigateTo("question-show");
  });
});
