const stringArray = ['apple', 'banana', 'cherry'];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];
const anyArray = ['hello', 42, true, { key: 'value' }];

// Loop forEach
console.log('------------------- stringArray');
stringArray.forEach(item => console.log(item));
console.log('------------------- numberArray');
numberArray.forEach(num => console.log(num * 2));
console.log('------------------- booleanArray');
booleanArray.forEach(bool => console.log(bool));
console.log('-------------------');

// Map usage
console.log('------------------- stringArray');
const uppercasedStrings = stringArray.map(item => item.toUpperCase());
console.log(uppercasedStrings);
console.log('------------------- numberArray');
const squaredNumbers = numberArray.map(num => num ** 2);
console.log(squaredNumbers);
console.log('------------------- anyArray');
anyArray.forEach(item => console.log(item));
console.log('-------------------');
