let form1 = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
console.log(email.value, password.value);
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(email.value, password.value);
  if (email.value == "admin@gmail.com" && password.value == "admin") {
    window.open("/Admin Page/admin.html", "_self");
  } else {
    fetchandcheck();
  }
});

function fetchandcheck() {
  fetch(`https://64230bad001cb9fc2036bd2f.mockapi.io/users`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      check(data);
    });
}

function check(data) {
  let flag = false;
  for (let i = 0; data.length; i++) {
    console.log(data[i].email, data[i].password);
    if (data[i].email == email.value && data[i].password == password.value) {
      alert("login successfull");
      localStorage.setItem("user", data[i].id);
      window.open("/index.html", "_self");
      flag = true;
      return;
    }
  }
  if (flag == false) {
    alert("Wrong password or email");
  }
}
