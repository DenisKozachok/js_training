const person = {
    _name: "John",
    _age: 30,

    get name() {
        return this._name;
    },

    set name(newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Invalid name");
        }
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (Number.isInteger(newAge) && newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Invalid age");
        }
    },

    increaseAge() {
        this._age += 1;
        return this._age;
    }
};

console.log("Initial Name:", person.name);
console.log("Initial Age:", person.age);

person.name = "Alice";
person.age = 35;

console.log("Updated Name:", person.name);
console.log("Updated Age:", person.age);

console.log("Increased Age:", person.increaseAge());
