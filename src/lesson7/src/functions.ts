function sumArray(arr: (number | string)[]): number {
    let total = 0;
    for (const item of arr) {
        // Перетворюємо кожен елемент у число
        total += typeof item === 'number' ? item : Number(item);
    }
    return total;
}

// Приклади масивів
const numberArray: number[] = [10, 20, 30];
const stringArray: string[] = ['5', '15', '25'];

// Виклики функції та виведення результатів у консоль
console.log('Sum of numberArray =', sumArray(numberArray));   // 60
console.log('Sum of stringArray =', sumArray(stringArray));   // 45
