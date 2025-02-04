function isAdult(age, isStudent) {
    switch (true) {
        case age < 18:
            console.log('You are a minor.');
            break;
        case age >= 18 && age < 25 && isStudent:
            console.log('You are a young student.');
            break;
        case age >= 18 && age < 25:
            console.log('You are a young adult.');
            break;
        default:
            console.log('You are an adult.');
    }
}

let myAge = 16;
isAdult(myAge, true);

myAge = 18;
isAdult(myAge, true);
isAdult(myAge, false);

myAge = 19;
isAdult(myAge, false);

myAge = 59;
isAdult(myAge, false);
