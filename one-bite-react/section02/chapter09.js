// filter
// 기존 배열에서 조건을 만족하는 요소들을 필터링하여 새로운 배열로 반환
const arr = [
    {name: "John", age: 22},
    {name: "John333", age: 44},
    {name: "John22", age: 10},
    {name: "John", age: 32},
    {name: "Jandifr"},
    {name: "Janin"},
    {name: "Janil"},
];

console.log(
    arr.filter((item) => item.name === "John")
);

// map
// 배열의 모든 요소를 순회하면서, 콜백함수를 실행하여 결과값을 새로운 배열로 반환
const arr1 = [1, 2, 3, 4, 56]
console.log(
    arr.map((item) => {
        console.log(item);
        return item.name;
    })
);

// sort
// 배열의 요소를 사전순으로 정렬
const arr2 = [5, 4, 6, 7, 8, 43, 1, 2]
console.log(arr2.sort());
console.log(arr2.sort((a, b) => {
    // 양수는 오름차순
    // 음수는 내림차순
    return a - b;
}));

// toSorted
// sort와 다르게 원본 배열을 정렬하는 것이 아닌 정렬된 새로운 배열을 반환
const arr3 = arr2.toSorted((a, b) => b - a);
console.log(arr3);

// join
// 배열의 모든 요소를 하나의 문자열로 반환
console.log(arr2.join());
console.log(arr3.join("/"));
