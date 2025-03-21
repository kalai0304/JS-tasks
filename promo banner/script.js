const messages = [
  "🎉 Flat 20% OFF on Hurry Laptops!, limited-time offer Shop now and save big! 🛍️✨",
  "💥 Get 30% OFF your first purchase! Use code: WELCOME30 at checkout. Don't miss out! 🎁🔥",
  "🛒 Flash Sale: 40% OFF today only!",
  "🌟 Festive Offer: Save 25% on all orders!",
  "🎊 Exclusive Offer: 50% OFF on all products! Double the joy, double the value. Limited period offer! 🛍️🎁",
];

const randomPromo = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const promoBanner = document.getElementById("promoBanner");
let promoMessage = promoBanner.textContent;
let discountPercent = 50;
let isUserLoggedIn = false;

console.log("promoMessage type is " + typeof promoMessage);
console.log("discountPercent type is " + typeof discountPercent);
console.log("isUserLoggedIn type is " + typeof isUserLoggedIn);

const intervalId = setInterval(() => {
  promoMessage = randomPromo(messages);
  promoBanner.textContent = promoMessage;
//   console.log(promoMessage);
  const digit = promoBanner.textContent.match(/\d+/g).map(Number);
  console.log();

  //   logging each variable's type
  console.log("promoMessage type is " + typeof promoMessage);
  console.log("discountPercent type is " + typeof Number(digit[0]));
  console.log("isUserLoggedIn type is " + typeof isUserLoggedIn +" ("+isUserLoggedIn+")");
}, 5000);

// stop intervel
// clearTimeout(intervalId);

//  is user logged in
let isLogIn = document.getElementById("isUserLoggedIn");

isLogIn.addEventListener("click", () => {
  if (!isUserLoggedIn) {
    isUserLoggedIn = true;
    isLogIn.textContent = "Log out";
  } else {
    isUserLoggedIn = false;
    isLogIn.textContent = "Log in";
  }
  // console.log(isUserLoggedIn)
});
