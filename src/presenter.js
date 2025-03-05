import decimalARomano from "./romanos";

const first = document.querySelector("#numero-decimal");
const form = document.querySelector("#romanos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + decimalARomano(firstNumber) + "</p>";
});
