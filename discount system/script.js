const users = [
  {
    username: "John",
    age: 28,
    email: "john@example.com",
    isLoggedIn: true,
    membershipLevel: "gold",
    couponCode: "HELLO123",
  },
  {
    username: "Emma",
    age: 25,
    email: "emma@example.com",
    isLoggedIn: true,
    membershipLevel: "silver",
    couponCode: "HI123",
  },
  {
    username: "Alex",
    age: 32,
    email: "alex@example.com",
    isLoggedIn: false,
    membershipLevel: "platinum",
    couponCode: "HELLO123",
  },
  {
    username: "Sophia",
    age: 22,
    email: "sophia@example.com",
    isLoggedIn: true,
    membershipLevel: "bronze",
    couponCode: "HELLO123",
  },
  {
    username: "Michael",
    age: 35,
    email: "michael@example.com",
    isLoggedIn: true,
    membershipLevel: "gold",
    couponCode: "HI123",
  },
];

const validCoupenCode = "HELLO123";
console.log(users)

const discount = users.filter((user) => {
  if (user.couponCode !== "HELLO123") {
    console.log(user.username + " You have invalid coupon code. No discount!");
    return;
  }
  if (user.isLoggedIn) {
    if(user.membershipLevel === "gold"){
        console.log(user.username +" Your coupon code applied discount is 30%");
    }else{
        console.log(user.username+" Your coupon code applied discount is 10%")
    }
  } else {
    console.log(
      user.username + " You are not loogeed in so you don't have discount"
    );
  }
});
