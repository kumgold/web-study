// 배열 순회
var arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 배열을 순회할 땐 of를 사용한다.
for (let num of arr) {
    console.log(num);
}

// 객체 순회
const person = {
    name: "John",
    age: 4,
    hobbies: [
        "A",
        "B"
    ]
};
const keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}
for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}

const values = Object.values(person);
for (const value of values) {
    console.log(value);
}

// in은 객체에만 쓸 수 있다.
for (const key in person) {
    console.log(key);
}


