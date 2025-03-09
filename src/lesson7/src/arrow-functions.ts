const sumArrayArrow = (arr: (number | string)[]): number => {
    return arr
        .map(item => (isNaN(Number(item)) ? 0 : Number(item))) // Перетворюємо тільки коректні числа, інші робимо 0
        .reduce((acc, num) => acc + num, 0);
};

// Приклади масивів
const numberArray2 = [1, 2, 3, 4];
const stringArray2 = ['10', '20', '30'];

// Виклики стрілочної функції та виведення результатів
console.log('Sum of numberArray2 =', sumArrayArrow(numberArray2));  // 10
console.log('Sum of stringArray2 =', sumArrayArrow(stringArray2));  // 60
