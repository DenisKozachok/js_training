const complexObject = {
    name: "Denys",
    age: 33,
    address: {
        city: "Zaporizhzhia",
        country: "Ukraine"
    },
    hobbies: ["coding", "gaming", "hiking"],
    printInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log(`Location: ${this.address.city}, ${this.address.country}`);
        console.log(`Hobbies: ${this.hobbies.join(", ")}`);
    }
};

complexObject.printInfo();
