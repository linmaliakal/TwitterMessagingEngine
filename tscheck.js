var Student = /** @class */ (function () {
    function Student(firstName, middleInit, lastName) {
        this.firstName = firstName;
        this.middleInit = middleInit;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInit + " " + lastName;
    }
    return Student;
}());
function greet(person) {
    return "Hello, " + person.firstName + " " + person.middleInit + " " + person.lastName;
}
var user = new Student("Linette", "V.", "Maliakal");
document.body.innerHTML = greet(user);
