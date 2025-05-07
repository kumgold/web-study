// async
// 함수를 비동기로 만든다 = 함수가 Promise를 반환하도록 한다

async function getData() {
    return {
        name: "Jon",
        age: 22
    };
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능하다
// 비동기 함수가 다 처리되도록 기다린다
async function task() {
    const result = await getData();

    console.log(result);
}

task();