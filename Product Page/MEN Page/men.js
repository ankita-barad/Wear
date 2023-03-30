let url = "https://64230bad001cb9fc2036bd2f.mockapi.io/products";
let container = document.getElementById("men_products");
let detailPageData = JSON.parse(localStorage.getItem("detailPage")) || [];

window.onload = () => {
  fetchData(url);
};
async function fetchData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displayProductData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayProductData(data) {
  data.forEach((item) => {
    let card = document.createElement("div");
    card.setAttribute("class", "Product_Card");

    let image_div = document.createElement("div");
    image_div.setAttribute("class", "image_container");

    let image = document.createElement("img");
    image.setAttribute("src", `${item.images.mainImg}`);
    image.setAttribute("class", "productImage");
    image.setAttribute("data-set", `${item.id}`);
    image_div.append(image);

    image.addEventListener("click", async (e) => {
      let id = e.target.dataset.set;
      console.log(id);
      let res = await fetch(
        `https://64230bad001cb9fc2036bd2f.mockapi.io/products/${id}`
      );
      let data = await res.json();
      localStorage.setItem("detailPage", JSON.stringify([data]));
      window.location.href = "../ProductDetail_page/product_detail.html";
    });

    let Name_div = document.createElement("div");
    let productName = document.createElement("p");
    productName.setAttribute("class", "productName");
    productName.innerText = item.title;
    Name_div.append(productName);

    let Price_div = document.createElement("div");
    let productPrice = document.createElement("p");
    productPrice.setAttribute("class", "productPrice");
    productPrice.innerText = `$ ${item.price}`;
    Price_div.append(productPrice);

    let fav_div = document.createElement("div");
    fav_div.setAttribute("class", "fav_div");
    let favProduct = document.createElement("img");
    favProduct.setAttribute("class", "fav_product_icon");
    favProduct.setAttribute("src", "../Images/heart-3-line.png");
    fav_div.append(favProduct);
    image_div.append(fav_div);

    card.append(image_div, Name_div, Price_div);
    container.append(card);
  });
}
