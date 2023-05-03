function task1() {
    let input = +document.getElementById('taskOneInput').value
    let result
    if (input == 0) {
        result = 1
    }
    if (input < 3 && input > 0) {
        result = input
    }
    else {
        i = input - 1
    }
    for (i; i > 0; i--) {
        input = input * i
        result = input
    }
    document.getElementById('taskOneResult').value = result
}

function task2() {
    let input = document.getElementById('taskTwoInput').value
    let result = input.replace(/[aeiou, AEIOU]/g, '');
    document.getElementById('taskTwoResult').value = result
}

function task3() {
    let input = document.getElementById('taskThreeInput').value
    input = input.split(",").map(Number);
    let result = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] > result) {
            result = input[i];
        }
    }
    document.getElementById('taskThreeResult').value = result
}

function task4() {
    let input = document.getElementById('taskFourInput').value
    let result = []
    let inputArr = input.split(" ")
    for (i = 0; i < inputArr.length; i++) {
        let capitalize = inputArr[i][0].toUpperCase() + inputArr[i].slice(1).toLowerCase()
        result.push(capitalize)
    }
    result = result.join(" ")
    document.getElementById('taskFourResult').value = result
}

function task5() {
    let input = document.getElementById('taskFiveInput').value
    input = input.split(",").map(Number);
    let result = input[0]
    for (let i = 1; i < input.length; i++) {
        result = result + input[i]
    }
    result = (result / input.length).toFixed(2)
    document.getElementById('taskFiveResult').value = result
}

function task6() {
    let input = document.getElementById('taskSixInput').value
    let isPalindrome = input === input.split("").reverse().join("");
    if (!isPalindrome) {
        document.getElementById('taskSixResult').value = "'" + input + "' is not a Palindrome."
    }
    else {
        document.getElementById('taskSixResult').value = "'" + input + "' is a Palindrome."
    }
}

function task7() {
    let input = document.getElementById('taskSevenInput').value
    input = input.split(",")
    input.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })
    document.getElementById('taskSevenResult').value = input
}

function task8() {
    let input = +document.getElementById('taskEightInput').value;
    if (input < 2) {
        document.getElementById('taskEightResult').value = "'" + input + "' is not a Prime number.";
        return;
    }
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            document.getElementById('taskEightResult').value = "'" + input + "' is not a Prime number.";
            return;
        }
    }
    document.getElementById('taskEightResult').value = "'" + input + "' is a Prime number.";
}

function task9() {
    let input = document.getElementById('taskNineInput').value
    let method = document.getElementById('selection').value
    if (method == "strAscend") {
        input = input.split(",")
        input.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })
        document.getElementById('taskNineResult').value = input
    }
    else if (method == "strDescend") {
        input = input.split(",")
        input.sort(function (a, b) {
            if (a > b) {
                return -1;
            }
            if (a < b) {
                return 1;
            }
            return 0;
        })
        document.getElementById('taskNineResult').value = input
    }
    else if (method == "numAscend") {
        input = input.split(",")
        input.sort(function (a, b) {
            return a - b;
        })
        document.getElementById('taskNineResult').value = input
    }
    else if (method == "numDescend") {
        input = input.split(",")
        input.sort(function (a, b) {
            return b - a;
        })
        document.getElementById('taskNineResult').value = input
    }
}