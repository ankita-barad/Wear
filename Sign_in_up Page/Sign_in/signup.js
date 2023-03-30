let form = document.getElementById("form");
let email = document.getElementById("email");
let name = document.getElementById("name");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let password = document.getElementById("password");

let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

let dob = `${date.value}-${month.value}-${year.value}`;
let current = 2023;
let age = `${current - year.value}`;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: name.value,
    avator:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/865.jpg",
    email: email.value,
    password: password.value,
    fevList: [],
    orderList: [],
    phoneNo: phone.value,
    address: address.value,
    cartList: [],
    age: age,
  };
  fetchandpost(obj);
});

function fetchandpost(obj) {
  fetch(`https://64230bad001cb9fc2036bd2f.mockapi.io/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })

}
