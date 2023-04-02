let content = document.getElementById("content");
let sub = document.getElementById("subtotal");
let tot = document.getElementById("total");
let nos = document.getElementById("nos");
let mail = document.getElementById("mail");
let home = document.getElementById("home");
let userid = +localStorage.getItem("user");
let buy = document.getElementById("buy");
console.log(userid);
buy.addEventListener("click", function (e) {
  alert("payment successfull");
  window.open("/index.html", "_self");
});
window.addEventListener("load", function (e) {
  e.preventDefault();

  fetchandrender(userid);
});

function fetchandrender(id) {
  fetch(`https://64230bad001cb9fc2036bd2f.mockapi.io/users/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      mail.innerText = data.email;
      home.innerText = data.address;
      fetchproducts(data.orderList);
    });
}

function fetchproducts(a) {
  fetch(`https://64230bad001cb9fc2036bd2f.mockapi.io/products`)
    .then((res) => res.json())
    .then((data) => {
      rendertodom(a, data);
    });
}

function rendertodom(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j].id) {
        c.push(b[j]);
      }
    }
  }
  console.log(c);
  appendtodom(c);
}
let total = 0;
function appendtodom(c) {
  content.innerHTML = null;
  nos.innerText = `${c.length} `;
  for (let i = 0; i < c.length; i++) {
    let top = document.createElement("div");
    let div = document.createElement("div");
    div.setAttribute("class", "content-1");
    let image = document.createElement("img");
    image.setAttribute("src", c[i].images.mainImg);
    div.append(image);
    let description = document.createElement("div");
    description.setAttribute("class", "content-2");
    let price = document.createElement("p");
    price.innerText = `$ ${
      c[i].price - c[i].price * (c[i].discountPercentage / 100)
    }`;
    total += c[i].price - c[i].price * (c[i].discountPercentage / 100);
    let title = document.createElement("p");
    title.innerText = c[i].title;
    let color = document.createElement("p");
    color.innerText = c[i].color;
    let quantity = document.createElement("p");
    quantity.innerText = `QTY 1`;
    description.append(price, title, color, quantity);
    top.append(div, description);
    content.append(top);
  }
  sub.innerText = `$ ${total}`;
  tot.innerText = `$ ${total}`;
  let patchwork = {
    orderCost: total,
  };
  // patching(patchwork);
}

// function patching(t) {
//   fetch(`https://64230bad001cb9fc2036bd2f.mockapi.io/products/1`, {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(t),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
