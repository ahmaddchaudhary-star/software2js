let count = Number(prompt("Enter number of participants:"));

let names = [];

// ask names
for (let i = 0; i < count; i++) {
    let name = prompt("Enter name of participant " + (i + 1) + ":");
    names.push(name);
}

// sort alphabetically
names.sort();

// create ordered list
let list = "<ol>";

for (let i = 0; i < names.length; i++) {
    list += "<li>" + names[i] + "</li>";
}

list += "</ol>";

// print to HTML
document.getElementById("output").innerHTML = list;