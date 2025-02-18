const sumArrayArrow = (arr: (number | string)[]): number => {
    return arr.reduce((acc, item) => acc + Number(item), 0);
};

// Приклади масивів
const numberArray2: number[] = [1, 2, 3, 4];
const stringArray2: string[] = ["10", "20", "30"];

// Виклики стрілочної функції та виведення результатів
console.log("Sum of numberArray2 =", sumArrayArrow(numberArray2));  // 10
console.log("Sum of stringArray2 =", sumArrayArrow(stringArray2));  // 60
