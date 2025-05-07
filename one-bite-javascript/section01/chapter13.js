// 콜백 함수
function main(value) {
    value();
}

function sub() {
    console.log("sub function");
}

main(sub);

function repeat(count) {
    for (let i = 1; i <= count; i++) {
        console.log(i);
    }
}

repeat(5);