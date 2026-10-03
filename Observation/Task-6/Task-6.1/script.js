class Student {
    constructor(name, rollNo, branch) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    displayDetails() {
        console.log(
            `Name: ${this.name}, Roll No: ${this.rollNo}, Branch: ${this.branch}`
        );
    }
}

// Creating multiple objects from the same class
const student1 = new Student("Vani", 101, "CSE");
const student2 = new Student("Anjali", 102, "CSE");
const student3 = new Student("Jeslyn", 103, "CSE");

student1.displayDetails();
student2.displayDetails();
student3.displayDetails();