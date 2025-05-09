// 1. 암묵적 형변환
// 자바스크립트 엔진이 형변환 하는 것.

let num = 10;
let str = "20";

const result = num + str;

// console.log(result);

// 2. 명시적 형변환
// 개발자가 내장 함수 등을 이용해서 직접 형변환.

let strToNum = Number(str);

console.log(strToNum + 20);

let numToStr = String(num);

console.log(numToStr + "입니다");