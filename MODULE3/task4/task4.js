const btn = document.getElementById("calculate");
const result = document.getElementById("result");

btn.addEventListener("click", function () {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  let answer;

  if (operation === "add") {
    answer = num1 + num2;
  } else if (operation === "subtract") {
    answer = num1 - num2;
  } else if (operation === "multiply") {
    answer = num1 * num2;
  } else if (operation === "divide") {
    answer = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  }

  result.textContent = answer;
});