import Person from "./person";

let person = new Person("Vitalii", "Denysiuk");
console.log(person);
document.getElementById("nameSpan").innerHTML = person.getFirstName() + " " + person.getLastName();