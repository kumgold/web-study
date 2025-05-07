function task(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        console.log("Hi, ", sum);
        callback(sum);
    }, 2000)
}

task(1, 2, (value) => {
    console.log(value);
});

function order(callback) {
    setTimeout(() => {
        const food = "food";
        callback(food);
    }, 3000);
}

function cooldown(food, callback) {
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000);
}

order((food) => {
    console.log(food);
    cooldown(food, (value) => {
        console.log(value);
    })
});
