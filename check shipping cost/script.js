const addToCart = document.querySelectorAll(".addtocart");
let isAddedIn = false;
let price = 0;

const myArray = [0];

let shippingCost = 0;
let minReqCost = 1500;

addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    // fetch the parent class element
    const productCard = button.closest(".product");
    const priceElement = productCard.querySelector(".price");
    const priceText = priceElement.innerText;

    // console.log(priceText)
    if (button.innerText === "Add to Cart") {
      button.innerText = "Remove";
      price = Number(priceText.match(/\d+/g)) + 1;
      myArray.push(price);
      //   console.log("price " + myArray);
    } else {
      button.innerText = "Add to Cart";

      let value = Number(priceText.match(/\d+/g)) + 1;
      const index = myArray.indexOf(value);
      myArray.splice(index, 1);
      //   console.log("price " + myArray);
    }
  });
});
let costReq = 0;
const findCost = (myArray) => {
  costReq = myArray.reduce((start, end) => {
    return start + end;
  });
};
// cart items
const cart = document.getElementById("cart-btn");
cart.addEventListener("click", () => {
  const inYourCart = document.getElementById("inYourCart");
  inYourCart.classList.remove("cartClass");

  findCost(myArray);
  yourCart();
  //   console.log("cost req " + costReq);
});
const yourCart = () => {
  shippingCost = costReq >= minReqCost ? 0 : 200;

  let totalCost = costReq + shippingCost;
  document.getElementById("cost-req").textContent = costReq;
  document.getElementById("shipping-cost").textContent = shippingCost;
  document.getElementById("total-cost").textContent = `₹ ${totalCost}`;
};

// like button
const likeButton = document.querySelectorAll(".likeBtn");

likeButton.forEach((button) => {
  button.addEventListener("click", () => {
    let val = 0;
    const parentElement = button.closest(".likeAndPrice");
    let likeCount = parentElement.querySelector(".likeCount");
    console.log(likeCount.textContent++);
  });
});
