let dogs = [];

// ask for 6 dog names
for (let i = 0; i < 6; i++) {
    let name = prompt("Enter name of dog " + (i + 1) + ":");
    dogs.push(name);
}

// sort reverse alphabetical
dogs.sort((a, b) => b.localeCompare(a));

// create unordered list
let list = "<ul>";

for (let i = 0; i < dogs.length; i++) {
    list += "<li>" + dogs[i] + "</li>";
}

list += "</ul>";

// print to HTML
document.getElementById("output").innerHTML = list;