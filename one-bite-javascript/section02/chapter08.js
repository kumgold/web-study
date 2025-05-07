// forEach
// 배열의 모든 요소를 순회.
const arr = [1, 2, 3, 4, 4, 4, 5];
arr.forEach((item, index) => {
    console.log(index, item * 2);
})

// includes
// 배열에 특정 요소를 확인하는 메서드
console.log(arr.includes(3));

// indexOf
// 특정 요소의 인덱스를 찾아서 반환한다.
console.log(arr.indexOf(4));
console.log(arr.indexOf(51));

// findIndex
// 특정 요소의 인덱스를 반환하는 메서드.
// indexOf는 객체 형식 배열에서 알맞은 요소의 위치를 찾을 수 없다.
const findIndex = arr.findIndex((item) => {
    if (item === 4) {
        return true;
    }
});

console.log(findIndex);

// find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾고, 반환한다.
const arr1 = [
    {name: "Johin"},
    {name: "January"},
];

console.log(
    arr1.find((item) => item.name === "January")
);


