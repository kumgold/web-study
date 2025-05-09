// Date 객체를 생성하는 방법
const date = new Date();
console.log(date.toLocaleDateString());

const date2 = new Date("1997-01-01");
console.log(date2.toLocaleDateString());

// Timestamp
// UTC(1970.01.01 00:00:00 )을 기준으로 몇 ms가 지났는지를 의미하는 값
const ts = date.getTime();
console.log(ts);

// 시간 요소를 추출하는 방법
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
console.log(year, month, day, hour, minute, second);

// 시간 수정
// date.setFullYear(2024, month, day);
// date.setMonth(3);
// date.setDate(1);
//
// date.setHours(22);
// date.setMinutes(1);
// date.setSeconds(2);
// console.log(date);

// 시간을 여러 포맷으로 출력
console.log(date.toDateString());
console.log(date.toLocaleString());
