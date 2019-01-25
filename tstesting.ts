class Student {
  fullName: string;
  constructor(public firstName: string, public middleInit: string, public lastName: string) {
    this.fullName = firstName + " " + middleInit + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greet(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Linette", lastName:  "Maliakal"}

document.body.innerHTML = greet(user);
