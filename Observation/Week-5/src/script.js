const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function(){

const studentName = document.getElementById("studentName").value;
document.getElementById("student").textContent = `Name : ${studentName}`
const english = Number(document.getElementById("eng").value);
const maths = Number(document.getElementById("math").value);
const science = Number(document.getElementById("sci").value);
const social = Number(document.getElementById("soc").value);
const sl = Number(document.getElementById("sl").value);

const total = english + maths + science + social + sl;
console.log(total);

const totalElement = document.getElementById("total");
totalElement.textContent = `Total : ${total}`;

const average = total / 5;
const avgElement = document.getElementById("average");
avgElement.textContent = `Average: ${average}`;

let grade;
if(average >= 90){
    grade = "A";
}
else if(average >= 80){
    grade = "B";
}
else if(average >= 70){
    grade = "C";
}
else if(average >= 60){
    grade = "D";
}
else{
    grade = "Fail";
}

document.getElementById("grade").textContent = `grade : ${grade}`;

const gradeElement = document.getElementById("grade");
if(grade == "A"){
    gradeElement.style.color = "green";
}
else if(grade === "B"){
     gradeElement.style.color = "blue";
}
else if(grade === "C"){
     gradeElement.style.color = "yellow";
}
else if(grade === "D"){
     gradeElement.style.color = "orange";
}
else{
    gradeElement.style.color = "red";
}

let result;

if (
    english >= 35 &&
    maths >= 35 &&
    science >= 35 &&
    social >= 35 &&
    sl >= 35
) {
    result = "PASS";
}
else {
    result = "FAIL";
}
document.getElementById("result").textContent = `Result : ${result}`;
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
    document.getElementById("studentName").value = "";
document.getElementById("eng").value = "";
document.getElementById("math").value = "";
document.getElementById("sci").value = "";
document.getElementById("soc").value = "";
document.getElementById("sl").value = "";

document.getElementById("student").textContent = "Name :";
document.getElementById("total").textContent = "Total :";
document.getElementById("average").textContent = "Average :";
document.getElementById("grade").textContent = "Grade :";
document.getElementById("result").textContent = "Result :";

document.getElementById("grade").style.color = "";
});