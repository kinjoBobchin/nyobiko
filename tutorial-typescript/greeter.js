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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("bob", "K.", "chin");
document.body.innerHTML = greeter(user);
