// Write chatr code here!

// Routes built in Chatr-Express
// GET /messages -> Res = A JSON list of Messages
// POST /messages -> Res = A confirmation
// PATCH /messages -> Res = A confirmation
// DELETE /messages -> Res = A confirmation

// Making HTTP requests with JavaScripts

// We use the function `fetch` that is only available
// in the browser. To use fetch in node, you must install
// https://github.com/bitinn/node-fetch and require to use it.

// Making a GET request

// Calling `fetch` with a URL as its only argument
// will make a basic GET request to that URL.
fetch("http://localhost:3434/messages")
  // Use then with callback to read the HTTP `response` from the server.
  // Use the method .text() or .json() on the response
  // process its body. Make sure to return from the callback.
  .then(response => {
    return response.json();
  });
// Use another .then with callback to read the processed
// body. Here we're logging with console.table() because
// it is an array of objects.
// .then(body => console.table(body));

// Making a POST request

// To make a POST request, we supply options as second argument
// to fetch.
// fetch("/messages", {
//   method: "POST", // The HTTP Verb of the request
//   headers: {
//     // Its HTTP headers
//     // Tells the server that we're sending
//     // JSON encoded data
//     "Content-Type": "application/json"
//   },
//   // The body of the request. This where we put our data.
//   body: JSON.stringify({ body: "What's up?" })
// });

// Fetches for Message related routes
const Message = {
  all() {
    // prettier-ignore
    return fetch("http://localhost:3434/messages")
      .then(response => response.json())
  },
  // Example usage:
  // Message.all().then(body => console.log(body))
  create(params) {
    return fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
  },
  delete(id) {
    return fetch(`/messages/${id}`, {
      method: "DELETE"
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {

  const filterButton = document.querySelector("#filter-messages-btn");
  filterButton.addEventListener('click',()=>{
    filterButton.getAttribute('data-filterStatus');
  })

  const messagesUl = document.querySelector("#messages");
  const messageForm = document.querySelector("#new-message");

  const refreshMessages = () =>
    Message.all().then(messages => {
      messagesUl.innerHTML = messages
        .map(
          message => `
          <li>
            <span>${message.username}</span><br>
            <button 
              data-id="${message.id}" 
              class="message-flag">Flag</button>
            <strong>#${message.id}</strong>  ${message.body} <br>
            <button
              data-id="${message.id}"
              class="message-delete">Delete</button>
          </li>
        `
        )
        .join("");
    });

  refreshMessages();
  setInterval(refreshMessages, 500);

  messageForm.addEventListener("submit", event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Message.create({ body: formData.get("body"), username: formData.get("username") }).then(() => {
      console.log("Message created!");

      refreshMessages();
      currentTarget.reset();
    });
  });

  messagesUl.addEventListener("click", event => {
    const { target } = event;
   

    if (target.matches(".message-delete")) {
       const messageId = target.getAttribute("data-id");
        Message.delete(messageId).then(() => refreshMessages());

    if (target.matches(".message-flag")){
    
      }
    }
  });
}); 

