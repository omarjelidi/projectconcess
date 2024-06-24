const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const email1 = document.getElementById("email1").innerHTML ;
const email2 = document.getElementById("email2")  .innerHTML ;

const nedBtn = document.getElementById("KD"); // Assuming KD is the ID of your button
const neddBtn = document.getElementById("Nd"); // Assuming KD is the ID of your button
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
neddBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
nedBtn.addEventListener("mousedown", () => {
  let toul = email1.length
  console.log(toul)
});
