// Falsy
var f1 = undefined;
var f2 = null;
var f3 = 0;
var f4 = NaN;
var f5 = "";

if (!f1) {
    console.log("Falsy");
}

// Truthy
var t1 = "Hello";
var t2 = [];
var t3 = {};

if (t1) {
    console.log("Truthy");
}

function printName(person) {
    if (person && person.name) {
        console.log(person.name);
    } else {
        console.log("Name is Undefined");
    }
}

var person = {name: "John"};
printName(person);