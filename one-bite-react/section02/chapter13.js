// Promise
// Pending
// Fulfilled (resolve)
// Rejected (reject)

function add(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업
        // Executor

        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num is not a number");
            }
        }, 2000);
    });

    return promise;
}

add(10).then((value) => {
    console.log(value);
    return add(null);
}).then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
});


