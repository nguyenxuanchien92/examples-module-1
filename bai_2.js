let arr = [1, 2, 3, 4, 5, 6, 7];

function checkIndex(arr, num) {
    let val = arr.indexOf(num);
    if (val !== -1) {
        return true;
    } else {
        return false;
    }
}

function show(arr, num) {
    let boolean = checkIndex(arr, num);
    if (boolean) {
        let result = arr.indexOf(num);
        console.log(`index: ${result}`);
    } else {
        console.log("Không có kết quả !");
    }
}

show(arr, 5);