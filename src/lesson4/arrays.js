const stringArray = ['apple', 'banana', 'cherry'];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];
const anyArray = ['hello', 42, true, { key: 'value' }];

// Using forEach
console.log('------------------- stringArray');
stringArray.forEach(item => console.log(item));
console.log('------------------- numberArray');
numberArray.forEach(num => console.log(num * 2));
console.log('------------------- booleanArray');
booleanArray.forEach(bool => console.log(bool));
console.log('-------------------');

// Using map
console.log('------------------- stringArray');
const uppercasedStrings = stringArray.map(item => item.toUpperCase());
console.log(uppercasedStrings);
console.log('------------------- numberArray');
const squaredNumbers = numberArray.map(num => num ** 2);
console.log(squaredNumbers);
console.log('------------------- anyArray');
anyArray.forEach(item => console.log(item));
console.log('-------------------');

//Adding elements to an array
// concat
const combinedArray = stringArray.concat(['date', 'elderberry']);
console.log('------------------- concat result');
console.log(combinedArray);

// reduce
const sumOfNumbers = numberArray.reduce((acc, num) => acc + num, 0);
console.log('------------------- reduce result (sum)');
console.log(sumOfNumbers);

// slice
const slicedArray = stringArray.slice(1, 3);
console.log('------------------- slice result');
console.log(slicedArray);

// sort
const sortedNumbers = [...numberArray].sort((a, b) => b - a);
console.log('------------------- sort result (descending)');
console.log(sortedNumbers);

// push
numberArray.push(6);
console.log('------------------- after push');
console.log(numberArray);

// pop
const poppedElement = numberArray.pop();
console.log('------------------- after pop');
console.log(poppedElement);
console.log(numberArray);

// filter
const filteredArray = numberArray.filter(num => num % 2 === 0);
console.log('------------------- filter result (even numbers)');
console.log(filteredArray);

// find
const foundElement = stringArray.find(item => item.startsWith('b'));
console.log('------------------- find result (starts with "b")');
console.log(foundElement);
console.log('-------------------');
