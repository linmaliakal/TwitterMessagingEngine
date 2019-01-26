class Student {
  fullName: string;
  constructor(public firstName: string, public middleInit: string, public lastName: string) {
    this.fullName = firstName + " " + middleInit + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  middleInit: string;
}

function greet(person: Person) {
  return "Hello, " + person.firstName + " " + person.middleInit + " " + person.lastName;
}

let user = new Student("Linette", "V.", "Maliakal");

document.body.innerHTML = greet(user);
