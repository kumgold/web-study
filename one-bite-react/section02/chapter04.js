// Spread 연산자
var arr1 = [1, 2, 3];
var arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

var object1 = {
    a: 1,
    b: 2
}
var object2 = {
    ...object1,
    c: 3,
    d: 4
}

console.log(object2);

function functionA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

functionA(...arr1);


// Rest 매개변수
function functionB(one, ...rest) { // Rest 매개변수는 배열로 저장
    console.log(one, rest);
}

functionB(...arr1);
functionB(...arr2);
