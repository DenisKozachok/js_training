// Loop from 0 to 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('-------------------');

// Loop from 100 to 0
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

console.log('-------------------');

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('I am at 5');
        break;
    }
    console.log(i);
}
