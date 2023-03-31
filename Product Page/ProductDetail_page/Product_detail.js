let ProductDetails = JSON.parse(localStorage.getItem("detailPage")) || [];
let container = document.getElementById("detailPage");
function displayProduct() {
  ProductDetails.forEach((item) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let sideImagesConatiner = document.createElement("div");
    let sideImages = item.images.otherImg;
    let sideImageDiv1 = document.createElement("div");
    let sideImage_1 = document.createElement("img");
    sideImage_1.setAttribute("src", sideImages[0]);
    sideImageDiv1.append(sideImage_1);

    let sideImageDiv2 = document.createElement("div");
    let sideImage_2 = document.createElement("img");
    sideImage_2.setAttribute("src", sideImages[1]);
    sideImageDiv2.append(sideImage_2);

    let sideImageDiv3 = document.createElement("div");
    let sideImage_3 = document.createElement("img");
    sideImage_3.setAttribute("src", sideImages[2]);
    sideImageDiv3.append(sideImage_3);

    sideImagesConatiner.append(sideImageDiv1, sideImageDiv2, sideImageDiv3);

    let ProductName = document.createElement("h4");
    ProductName.innerText = item.title;
    let NameDiv = document.createElement("div");
    NameDiv.setAttribute("class", "NameDiv");
    NameDiv.append(ProductName);

    let imageConatiner = document.createElement("div");
    imageConatiner.setAttribute("class", "imageConatiner");
    let ProductDetailContainer = document.createElement("div");
    ProductDetailContainer.setAttribute("class", "ProductDetailContainer");

    let productImage = document.createElement("img");
    productImage.setAttribute("src", `${item.images.mainImg}`);
    productImage.setAttribute("class", "productImage");

    let ProductPrice = document.createElement("p");
    ProductPrice.innerText = `$ ${item.price}`;
    ProductPrice.setAttribute("class", "ProductPrice");
    let PriceDiv = document.createElement("div");
    PriceDiv.append(ProductPrice);

    let ProductColor = document.createElement("p");
    ProductColor.innerText = `COLOR:${item.color}`;
    ProductColor.setAttribute("class", "ProductColor");

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "ADD TO BAG";
    addToCartBtn.setAttribute("class", "addToCartBtn");

    let favBtn = document.createElement("img");
    favBtn.setAttribute("src", "../Images/heart-3-line.png");
    favBtn.setAttribute("class", "favBtn");
    let favBtnDiv = document.createElement("div");
    favBtnDiv.setAttribute("class", "favBtnDiv");
    favBtnDiv.append(favBtn);

    let addtoCartBtn_favBtn_container = document.createElement("div");
    addtoCartBtn_favBtn_container.setAttribute(
      "class",
      "addtoCartBtn_favBtn_container"
    );
    addtoCartBtn_favBtn_container.append(addToCartBtn, favBtnDiv);

    let ProductDt = document.createElement("button");
    ProductDt.innerText = "Product Details   ";
    let ProductDtDiv = document.createElement("div");
    ProductDt.setAttribute("class", "ProductDt");
    ProductDt.classList.add("accordion");
    let ProductDtContent = document.createElement("div");
    ProductDtContent.setAttribute("class", "ProductContent");
    ProductDtContent.classList.add("panel");
    ProductDtContent.innerText = item.productDetails;
    console.log(item.productDetails);
    ProductDtDiv.append(ProductDt, ProductDtContent);

    let BrandDetails = document.createElement("button");
    BrandDetails.innerText = "Brand";
    let BrandDetailsDiv = document.createElement("div");
    BrandDetails.setAttribute("class", "BrandDetails");
    BrandDetails.classList.add("accordion");
    let BrandDetailsContent = document.createElement("div");
    BrandDetailsContent.setAttribute("class", "BrandDetailsContent");
    BrandDetailsContent.classList.add("panel");
    BrandDetailsContent.innerText = item.brandDetails;
    BrandDetailsDiv.append(BrandDetails, BrandDetailsContent);

    let sizeDetails = document.createElement("button");
    sizeDetails.innerText = `Size & Fit `;
    let sizeDetailsDiv = document.createElement("div");
    sizeDetails.classList.add("accordion");
    sizeDetails.setAttribute("id", "sizeDetails");
    let sizeDetailsContent = document.createElement("div");
    sizeDetailsContent.setAttribute("class", "sizeDetailsContent");
    sizeDetailsContent.classList.add("panel");
    sizeDetailsContent.innerText = item.sizeAndFit;
    sizeDetailsDiv.append(sizeDetails, sizeDetailsContent);

    let detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("class", "detailsContainer");

    detailsContainer.append(ProductDtDiv, BrandDetailsDiv, sizeDetailsDiv);
    imageConatiner.append(productImage);
    ProductDetailContainer.append(
      NameDiv,
      PriceDiv,
      ProductColor,
      addtoCartBtn_favBtn_container,
      detailsContainer
    );

    card.append(imageConatiner, ProductDetailContainer);
    container.append(card);
  });
}
displayProduct();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  console.log(acc[i]);
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
