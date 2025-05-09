// push
// 배열 맨 뒤에 새로운 요소를 추가

const arr = [1, 2, 3];
const newLength = arr.push(4, 5, 6, 7);

console.log(arr);
console.log(newLength);

// pop
// 배열 맨 뒤에 있는 요소를 제거하고, 반환
console.log(arr.pop(), arr);

// shift
// 배열 맨 앞에 있는 요소를 제거하고, 반환
console.log(arr.shift(), arr);

// unshift
// 배열 맨 앞에 새로운 요소를 추가
const newLength2 = arr.unshift(0);
console.log(arr, newLength2);

// slice
// 배열 특정 범위를 잘라서 새로운 배열로 반환
console.log(arr.slice(2, 4));

// concat
// 두 개의 서로 다른 배열을 이어서 새로운 배열을 반환
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];

console.log(arr1.concat(arr2));
