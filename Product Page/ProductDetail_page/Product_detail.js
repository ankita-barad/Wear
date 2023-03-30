let ProductDetails = JSON.parse(localStorage.getItem("detailPage")) || [];
let container = document.getElementById("detailPage");
function displayProduct() {
  ProductDetails.forEach((item) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let imageConatiner = document.createElement("div");
    imageConatiner.setAttribute("class", "imageConatiner");
    let ProductDetailsConrainer = document.createElement("div");
    ProductDetailsConrainer.setAttribute("class", "ProductDetailsConrainer");

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

    let ProductDt = document.createElement("button");
    ProductDt.innerText = "Product details   +";
    ProductDt.setAttribute("class", "ProductDt");
    let ProductDtContent = document.createElement("div");
    ProductDtContent.setAttribute("class", "productDetails");
    ProductDtContent.innerText = item.productDetails;

    let BrandDetails = document.createElement("button");
    BrandDetails.innerText = "Brand Details  +";
    BrandDetails.setAttribute("class", "BrandDetails");
    let BrandDetailsContent = document.createElement("div");
    BrandDetailsContent.setAttribute("class", "BrandDetailsContent");
    BrandDetailsContent.innerText = item.brandDetails;

    let sizeDetails = document.createElement("button");
    sizeDetails.innerText = "Brand Details";
    sizeDetails.setAttribute("class", "sizeDetails  +");
    let sizeDetailsContent = document.createElement("div");
    sizeDetailsContent.setAttribute("class", "sizeDetailsContent");
    sizeDetailsContent.innerText = item.sizeAndFit;

    imageConatiner.append(productImage);
    ProductDetailsConrainer.append(
      PriceDiv,
      ProductColor,
      addToCartBtn,
      favBtn,
      ProductDt,
      BrandDetails,
      sizeDetails
    );

    card.append(imageConatiner, ProductDetailsConrainer);
    container.append(card);
  });
}
displayProduct();
