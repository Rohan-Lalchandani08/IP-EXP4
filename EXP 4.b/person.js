// Person class definition
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }

    greet = () => {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    };
}

// Arrow function outside the class (non-member function)
const printGreeting = (person) => {
    return `Greeting: Hi ${person.name}, welcome from ${person.city}.`;
};

// Function to create a person object with user input
function createPerson() {
    // Get user input using prompt
    const name = prompt("Enter your name:");
    const age = prompt("Enter your age:");
    const city = prompt("Enter your city:");

    // Create a new person object
    const person = new Person(name, age, city);

    // Display the details in the HTML page
    const detailsDiv = document.getElementById("person-details");
    detailsDiv.innerHTML = `
        <h2>Person Details</h2>
        <p>${person.getDetails()}</p>
        <p>${person.greet()}</p>
        <p>${printGreeting(person)}</p>
    `;
}
