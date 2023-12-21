// console.log("Hello world");
const userName = document.querySelector("#username");
const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");

const docTitle = document.querySelector("title");

inputs.forEach((input) =>
  input.addEventListener("keyup", (e) => {
    let checkName = 0,
      checkPass = 0;
    if (input.name === "username") checkName = e.target.value.trim().length;

    if (input.name === "password") checkPass = e.target.value.trim().length;
    if (checkName < 4 || checkPass < 8) {
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  })
);
