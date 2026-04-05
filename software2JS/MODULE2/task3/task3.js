const candidateCount = Number(prompt("Enter the number of candidates:"));
const candidates = [];

for (let i = 0; i < candidateCount; i++) {
    const candidateName = prompt("Name for candidate " + (i + 1) + ":");
    candidates.push({
        name: candidateName,
        votes: 0
    });
}

const voterCount = Number(prompt("Enter the number of voters:"));

for (let i = 0; i < voterCount; i++) {
    const vote = prompt("Voter " + (i + 1) + ", enter candidate name:");

    if (vote !== null && vote.trim() !== "") {
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j].name.toLowerCase() === vote.trim().toLowerCase()) {
                candidates[j].votes++;
                break;
            }
        }
    }
}

candidates.sort(function(a, b) {
    return b.votes - a.votes;
});

console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}