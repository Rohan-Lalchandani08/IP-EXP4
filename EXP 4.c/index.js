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

// Student class inheriting from Person class
class Student extends Person {
    constructor(name, age, city, rollNo) {
        super(name, age, city);  // Call the parent constructor
        this.rollNo = rollNo;

        // Throw an exception for invalid roll number
        if (this.rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }
    }

    // Override the getDetails method
    getDetails() {
        return `${super.getDetails()}, Roll No: ${this.rollNo}`;
    }

    // Additional method specific to Student
    study = () => {
        return `${this.name} is studying.`;
    };
}

// Function to create a student object with user input
function createStudent() {
    try {
        // Get user input using prompt
        const name = prompt("Enter student's name:");
        
        // Validate age input
        let age;
        while (true) {
            const ageInput = prompt("Enter student's age:");
            age = Number(ageInput); // Convert age input to a number
            
            if (isNaN(age) || age <= 0) {
                alert("Invalid input. Age must be a positive number.");
            } else {
                break; // Valid age, exit the loop
            }
        }

        const city = prompt("Enter student's city:");
        
        // Validate roll number input
        let rollNo;
        while (true) {
            rollNo = parseInt(prompt("Enter roll number:"));
            if (rollNo <= 0) {
                alert("Roll number must be greater than zero.");
            } else {
                break; // Valid roll number, exit the loop
            }
        }

        // Create a new student object
        const student = new Student(name, age, city, rollNo);

        // Display the details in the HTML page
        const detailsDiv = document.getElementById("student-details");
        detailsDiv.innerHTML = `
            <h2>Student Details</h2>
            <p>${student.getDetails()}</p>
            <p>${student.greet()}</p>
            <p>${student.study()}</p>
        `;
    } catch (error) {
        alert(error.message);  // Display error message
    }
}
