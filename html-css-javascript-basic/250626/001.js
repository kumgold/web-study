let a = 10;
let b = 5;
let c = 3;

if (a > b) {
    console.log(a, "가 더 큽니다.");
} else {
    console.log(b, "가 더 크거나 같습니다.");
}

if (userId === inputId) {
    console.log("아이디가 존재합니다.");
    // 비밀번호 확인
    if (userPW === inputPw) {
        console.log("로그인");
    } else {
        console.log("비밀번호 오류");
    }
} else {
    console.log("존재하지 않는 아이디입니다.");
}

const score = (100 + 80 + 50) / 3;

if (ko < 60 || en < 60 || math < 60 || score < 70) {
    console.log("불합격");
} else {
    console.log("합격");
}

if (ko >= 60 && en >= 60 && math >= 60 && score >= 70) {
    console.log("합격");
} else {
    console.log("불합격");
}
