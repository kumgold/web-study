// 함수 선언

function myFunction() {
    console.log("Hi");
}

myFunction();

function getArea(width, height) {
    let area = width * height;

    function another() {
        console.log("another");
    }

    another();
    console.log(area);
}

getArea(10, 20);