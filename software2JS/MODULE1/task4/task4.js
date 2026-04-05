  let numberOfDice = Number(prompt("Enter the number of dice:"));
let targetSum = Number(prompt("Enter the sum of eye numbers:"));

let rounds = 10000;
let successCount = 0;

for (let i = 0; i < rounds; i++) {
    let sum = 0;

    for (let j = 0; j < numberOfDice; j++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    if (sum === targetSum) {
        successCount++;
    }
}

let probability = (successCount / rounds) * 100;

document.getElementById("output").innerHTML =
    "Probability to get sum " + targetSum +
    " with " + numberOfDice +
    " dice is " + probability.toFixed(2) + "%";