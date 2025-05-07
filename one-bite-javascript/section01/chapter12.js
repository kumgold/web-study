function funcA() {
    console.log("function");
}

let functionA = funcA;

console.log(functionA);
functionA();

// 함수 표현식
let functionB = function () { // 호이스팅 불가
    console.log("functionB");
}

functionB();

// 람다식
let functionC = () => {
    console.log("functionC");
}

console.log(functionC);
functionC();
