function calculate() {
    let num1 = Number(prompt("Enter first integer:"));
    let num2 = Number(prompt("Enter second integer:"));
    let num3 = Number(prompt("Enter third integer:"));

    let sum = num1 + num2 + num3;
    let product = num1 * num2 * num3;
    let average = sum / 3;

    document.getElementById("output").innerHTML =
        "<p>Numbers: " + num1 + ", " + num2 + ", " + num3 + "</p>" +
        "<p>Sum: " + sum + "</p>" +
        "<p>Product: " + product + "</p>" +
        "<p>Average: " + average + "</p>";
}