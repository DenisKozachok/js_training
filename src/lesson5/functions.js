function sumArray(arr) {
    return arr.reduce((sum, current) => sum + Number(current), 0);
}

function minusArray(arr) {
    return arr.reduce((sum, current) => sum - Number(current), 0);
}

const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ["10", "20", "30"];

console.log("Sum of numbersArray:", sumArray(numbersArray));
console.log("Sum of stringsArray:", sumArray(stringsArray));

console.log("Minus of numbersArray:", minusArray(numbersArray));
console.log("Minus of stringsArray:", minusArray(stringsArray));
