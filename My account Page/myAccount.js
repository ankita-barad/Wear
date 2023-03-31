let main = document.getElementById("main");

window.addEventListener("load", function () {
  let img = document.createElement("img");
  img.setAttribute("src", "./image/Welcome to your account.png");
  main.append(img);
});

let account = document.getElementById("account");

account.addEventListener("click", function () {
  let img = document.createElement("img");
  img.setAttribute("src", "./image/Welcome to your account.png");
  main.append(img);
});

let orders = document.getElementById("orders");

orders.addEventListener("click", function () {
  main.innerHTML = null;
  let div = document.createElement("div");
  let text = document.createElement("h3");
  text.innerText = "MY ORDERS";
  div.append(text);
  main.append(div);
});

let returns = document.getElementById("returns");

returns.addEventListener("click", function () {});

let wearpremium = document.getElementById("wearpremium");

wearpremium.addEventListener("click", function () {});

let details = document.getElementById("details");

details.addEventListener("click", function () {});

let address = document.getElementById("address");

address.addEventListener("click", function () {});

let payments = document.getElementById("click", function () {});

payments.addEventListener("click", function () {});

let contact = document.getElementById("contact");
contact.addEventListener("click", function () {});

let social = document.getElementById("social");
social.addEventListener("click", function () {});
