const os = require('os');

console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

const path = require('path');

const filePath = '/home/user/documents/student.txt';

console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));

const fs = require('fs');

// Create and write to a file
fs.writeFileSync('student.txt', 'Name: Vani\nRoll No: 101');

// Read the file
const data = fs.readFileSync('student.txt', 'utf8');

console.log(data);

fs.appendFileSync('student.txt', '\nBranch: CSE');

fs.unlinkSync('student.txt');