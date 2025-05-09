// 객체 생성
var object1 = new Object(); // 객체 생성자
var object2 = {} // 객체 리터럴

var person = {
    name: "John", // 객체 프로퍼티
    age: 32,
    hobbies: [
        "A",
        "B"
    ]
}

// 객체 접근
console.log(person);
person.job = "FE Developer";
console.log(person);

delete person.hobbies

console.log(person);

var result = "name" in person;
console.log(result);
