
// ok
// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "bob";

// document.body.innerHTML = greeter(user);

// error
// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = [0, 1, 2];

// document.body.innerHTML = greeter(user);

// interface
// interface Person {
//     firstName: string,
//     lastName: string
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = { firstName: "bob", lastName: "chin" };
// document.body.innerHTML = greeter(user)


// class

class Student {
    fullName: string;
    constructor(
        public firstName: string, public middleInitial: string, public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("bob", "K.", "chin");

document.body.innerHTML = greeter(user);