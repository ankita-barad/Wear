let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(email.value, password.value);
  if (email.value == "admin@gmail.com" && password.value == "admin") {
    window.location.href = "admin.html";
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
      // console.log(data)
      check(data);
    });
}

function check(data) {
  for (let i = 0; data.length; i++) {
    if (data[i].email == email.value && data[i].password == password.value) {
    }
  }
}
