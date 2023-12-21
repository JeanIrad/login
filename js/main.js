// console.log("Hello world");
const userName = document.querySelector("#username");
const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");

const docTitle = document.querySelector("title");

inputs.forEach((input) =>
  input.addEventListener("keyup", (e) => {
    let check = e.target.value.trim().length;
    if (check < 8) {
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  })
);
