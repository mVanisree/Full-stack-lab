class Student{
    constructor(name, rollnumber, department, cgpa){
        this.name = name;
        this.rollnumber = rollnumber;
        this.dept = department;
        this.cgpa = cgpa;
    }
}

const createBtn = document.getElementById("createbtn");

createBtn.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    const rollnumber = document.getElementById("number").value;
    const department = document.getElementById("dept").value;
    const cgpa = document.getElementById("cgpa").value;

    const student = new Student(
        name,
        rollnumber,
        department,
        cgpa
    );

    const profile =document.getElementById("display-profile");

    profile.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";

    const namePara = document.createElement("p");
    namePara.textContent = "Name: " + student.name;

    const rollPara = document.createElement("p");
    rollPara.textContent = "Roll Number: " + student.rollnumber;

    const deptPara = document.createElement("p");
    deptPara.textContent = "Department: " + student.dept;

    const cgpaPara = document.createElement("p");
    cgpaPara.textContent = "CGPA: " + student.cgpa;

    profile.appendChild(heading);
    profile.appendChild(namePara);
    profile.appendChild(rollPara);
    profile.appendChild(deptPara);
    profile.appendChild(cgpaPara);
})