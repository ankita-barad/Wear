let user = localStorage.getItem("user");

let container = document.getElementById("CartContainer");

async function fetchUser() {
  try {
    let res = await fetch(
      `https://64230bad001cb9fc2036bd2f.mockapi.io/users/${user}`
    );
    let data = await res.json();

    console.log(data);
    displaycartItems(data.cartList);
  } catch (error) {
    console.log(error);
  }
}

async function updateCartList(userId, cartList) {
  try {
    let res = await fetch(
      `https://64230bad001cb9fc2036bd2f.mockapi.io/users/${userId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          cartList,
        }),
      }
    );
    let data = await res.json();

    console.log(data);
    displaycartItems(data.cartList);
  } catch (error) {
    console.log(error);
  }
}
fetchUser();

function displaycartItems(data) {
  container.innerHTML = "";
  console.log("DATA HERE", data);
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let image = document.createElement("img");
    image.setAttribute("src", `${ele.images.mainImg}`);
    image.setAttribute("class", "cartImage");

    let name = document.createElement("p");
    name.setAttribute("class", "name");
    name.innerText = ele.title;

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerText = +ele.price;

    let quantityofItem = document.createElement("span");
    quantityofItem.setAttribute("class", "quantityofItem");
    quantityofItem.innerText = ele.quantity;

    let price_name_quatity_container = document.createElement("div");
    price_name_quatity_container.setAttribute(
      "class",
      "price_name_quatity_container"
    );

    let increaseBtn = document.createElement("button");
    increaseBtn.setAttribute("class", "increaseBtn");
    increaseBtn.innerText = "+";

    increaseBtn.addEventListener("click", async () => {
      data.find((i) => i.id === ele.id).quantity++;
      console.log(data);
      // ele.quantity++;
      displaycartItems([...data]);
      await updateCartList(user, [...data]);
    });

    let decreaseBtn = document.createElement("button");
    decreaseBtn.setAttribute("class", "decreaseBtn");
    decreaseBtn.innerText = "-";

    decreaseBtn.addEventListener("click", async () => {
      if (ele.quantity > 1) {
        data.find((i) => i.id === ele.id).quantity--;
        // console.log(data);
        displaycartItems([...data]);
        await updateCartList(user, [...data]);
      }
    });

    let incre_decre_quantity_container = document.createElement("div");
    incre_decre_quantity_container.setAttribute(
      "class",
      "incre_dec_quantity_container"
    );

    let removeItem = document.createElement("button");
    removeItem.setAttribute("class", "removeItem");
    removeItem.innerText = "REMOVE";

    removeItem.addEventListener("click", async () => {
      const newData = data.filter((item) => {
        return item.id !== ele.id;
      });
      console.log(newData);
      displaycartItems([...newData]);
      await updateCartList(user, [...newData]);
    });

    let sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    sidebar.append(
      price_name_quatity_container,
      incre_decre_quantity_container,
      removeItem
    );
    incre_decre_quantity_container.append(
      increaseBtn,
      quantityofItem,
      decreaseBtn
    );
    price_name_quatity_container.append(
      price,
      name,
      incre_decre_quantity_container
    );

    card.append(image, sidebar);
    container.append(card);
  });

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price * data[i].quantity;
  }
  document.getElementById("cart_total").textContent = sum;
}
