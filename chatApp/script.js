let text = document.getElementById("ipMessage");
let button = document.getElementById("sendBtn");
// let message = document.getElementById("message");

const chatBox = document.getElementById("chatBox");

text.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});

button.addEventListener("click", () => {
  // trim the extra space
  let inputText = text.value.trim();
  let len = inputText.length;
  console.log("text length " + len);
  if (len === 0) {
    alert("Please enter some text! 🚨");
    return;
  }
  //   create new p tag
  const message = document.createElement("p");
  message.className = "message";
  //   check the condition
  inputText = len <= 10 ? inputText.toUpperCase() : inputText.toLowerCase();
  //   add text to message tag
  message.innerText = inputText;
  //   append child
  chatBox.appendChild(message);
  //   scroll top
  chatBox.scrollTop = chatBox.scrollHeight;
  text.value = "";
});

chatBox.scrollTo({
  top: chatBox.scrollHeight,
  behavior: "smooth", // Smooth scrolling
});
