const numberVar = 10;
const stringVar = 'Hello';
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;

console.log(`Should be TRUE: ${numberVar > 5}`);
console.log(`Should be FALSE: ${numberVar} < 5}`);
console.log(`Should be TRUE: ${stringVar === 'Hello'}`);
console.log(`Should be TRUE: ${stringVar !== 'World'}`);
console.log(`Should be TRUE: ${nullVar == undefinedVar}`);
console.log(`Should be FALSE: ${nullVar === undefinedVar}`);
console.log(`Should be FALSE: ${false == booleanVar}`);
console.log(`Should be TRUE: ${true === booleanVar}`);
console.log(`Should be TRUE: ${numberVar > 5 && stringVar === 'Hello'}`);
