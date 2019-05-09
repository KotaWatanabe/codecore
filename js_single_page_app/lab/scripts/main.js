const BASE_URL = `http://localhost:3000/api/v1`;


const Product = {
    all() {
      return fetch(`${BASE_URL}/products`, {
        // Makes include cookies in request and response for
        // cross-origin requests.
        credentials: "include"
      }).then(res => res.json());
    },
    async one(id) {
      // return await (await fetch(`${BASE_URL}/questions/${id}`)).json();
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        credentials: "include"
      });
      const product = await res.json();
      return product;
    },
    create(params) {
      return fetch(`${BASE_URL}/products`, {
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

  const viewProductListItems = products => {
    return products
      .map(
        p => `
        <li>
          <a class="product-link" data-id="${p.id}" href="">
            ${p.title}
          </a>
        </li>
      `
      )
      .join("");
  };

  const viewProductDetails = product => {
    return `
      <h1>${product.title}</h1>
      <p>
        ${product.description} <br/>
        <small>By ${product.first_name}</small>
      </p>
      <h3>Reviews</h3>
      <ul>
        ${product.reviews.map(r => `<li>${r.body}</li>`).join("")}
      </ul>
    `;
  };

  const navigateTo = pageId => {
    document.querySelectorAll(".page.current").forEach(node => {
      node.classList.remove("current");
    });
  
    document.querySelector(`.page#${pageId}`).classList.add("current");
  };

  document.addEventListener("DOMContentLoaded", () => {
    const productListUl = document.querySelector(".product-list");
    const productShowMain = document.querySelector("#product-show");
    const navbar = document.querySelector("header > nav");
    const newProductForm = document.querySelector("#new-product-form");
  

    Product.all().then(products => {
      productListUl.innerHTML = viewProductListItems(products)
    });
    productListUl.addEventListener("click", event => {
        const productLinkNode = event.target.closest(".product-link");
    
        if (productLinkNode) {
          event.preventDefault();
          const id = productLinkNode.getAttribute("data-id");
    
          Product.one(id).then(product => {
            productShowMain.innerHTML = viewProductDetails(product);
            navigateTo("product-show");
          });
        }
      });

      navbar.addEventListener("click", event => {
        const navLink = event.target.closest("a");
    
        if (navLink) {
          event.preventDefault();
          const targetPage = navLink.getAttribute("data-target");
    console.log(targetPage);
          navigateTo(targetPage);
        }
      });

    newProductForm.addEventListener("submit", async event => {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
    
        await Session.create({
          email: "js@winterfell.gov",
          password: "supersecret"
        });
    
        // data -> {id: 786}
        const data = await Product.create({
          title: formData.get("title"),
          body: formData.get("description")
        });
    
        const product = await Product.one(data.id);
    
        currentTarget.reset();
        productShowMain.innerHTML = viewProductDetails(product);
        navigateTo("product-show");
      });
    });
