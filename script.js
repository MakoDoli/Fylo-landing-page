const buttons = Array.from(document.querySelectorAll("button"));
const wrong = document.querySelectorAll(".wrong");
const email = document.getElementById("email");
const longEmail = document.querySelector("#long-email");
const mailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function checkMail(id) {
  if (id.value.match(mailReg)) {
    wrong.forEach((el) => (el.style.display = "none"));
  } else {
    wrong.forEach((el) => (el.style.display = "block"));
  }
}
document.body.addEventListener("click", function (e) {
  if (!buttons.includes(e.target)) {
    wrong.forEach((el) => (el.style.display = "none"));
    console.log("yes");
  }
});
