// 상수 객체
const person = {
    name: "John",
    age: 20,
    hobbies: [
        "A",
        "B"
    ],
    sayHi: () => {
        console.log(person.name + "Hi");
    }
}

console.log(person);

delete person.hobbies;

console.log(person);

// 메서드

person.sayHi();
