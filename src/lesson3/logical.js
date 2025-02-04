let numberVar = 10;
let stringVar = 'Hello';
let booleanVar = true;
let nullVar = null;
let undefinedVar;

console.log(`Should be TRUE: ${numberVar > 5}`);
console.log(`Should be FALSE: ${numberVar} < 5}`);
console.log(`Should be TRUE: ${stringVar === 'Hello'}`);
console.log(`Should be TRUE: ${stringVar !== 'World'}`);
console.log(`Should be TRUE: ${nullVar == undefinedVar}`);
console.log(`Should be FALSE: ${nullVar === undefinedVar}`);
console.log(`Should be FALSE: ${false == booleanVar}`);
console.log(`Should be TRUE: ${true === booleanVar}`);