// 1. Null 병합 연산자
// null, undefined가 아닌 값을 찾는 연산자.

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;

console.log(var4);
console.log(var5);

// 2. typeOf 연산자
// 갑의 타입을 문자열로 반환하는 연산자.

let var7 = 1;
var7 = "hello";

console.log(typeof var7);

// 3. 삼항 연산자

let result = (10 % 2 === 0) ? "Even" : "Odor";
console.log(result);
