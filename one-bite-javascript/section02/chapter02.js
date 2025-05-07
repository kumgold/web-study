// 단락 평가

function returnFalse() {
    console.log("false function");
    return null;
}

function returnTrue() {
    console.log("true function");
    return 10;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());
console.log(returnTrue() && returnTrue());
console.log(returnTrue() || returnTrue());

function printName(person) {
    const name = person && person.name;
    console.log(name || "Person name is undefined");
}

printName();
printName({name: "John"});
