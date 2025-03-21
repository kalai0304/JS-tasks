const age = document.getElementById("ageId");
// age.onkeydown = (event) => {
//   if (isNaN(event.key) && event.key !== "Backspace") {
//     event.preventDefault();
//   }
// };

let userName = "";
let ageValue = "";
let email = "";

const form = document.getElementById("signup-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  userName = formData.get("name");
  ageValue = Number(formData.get("age"));
  email = formData.get("email");
  //   console.log(typeof ageValue)
  if (isNaN(ageValue) || ageValue <= 0) {
    window.alert("Provide a valid age in number");
    // event.preventDefault();
    return;
  }

  show();
  form.reset();
});

const show = () => {
  console.log(userName);
  console.log(ageValue);
  console.log(email);
  const showAccess = document.getElementById("showAccess");
  showAccess.textContent = ageValue >= 18 ? "Adult" : "Minor";
};
