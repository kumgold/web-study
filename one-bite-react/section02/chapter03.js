// 배열 구조 분해 할당
const arr = [1, 2, 3];
const [one, two, three, four = 4] = arr;

console.log(`${one} ${two} ${three} ${four}`);

// 객체 구조 분해 할당
const person = {
    name: "John",
    age: 20,
    hobby: "a"
};

const {name: myName, age, hobby, extra = "b"} = person;
console.log(`${myName} ${age} ${hobby} ${extra}`);

const func = ({name, age}) => {
    console.log(`${name} ${age}`);
}

func(person);
func(10);