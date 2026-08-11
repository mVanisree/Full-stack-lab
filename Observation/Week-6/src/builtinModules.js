// to write file
const fs = require("fs");
console.log("Program started");
fs.writeFile("data.txt" , "Hello Node.js", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File Craeted successfully");
})

//to read the file
fs.readFile("data.txt" , "utf8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

// to add information

fs.appendFile("data.txt", "\nWelcome to Node.js", (err) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("Data added");
});

//delete the file 

// fs.unlink("data.txt", (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File deleted");
// })


// PATH MODULE 

const path = require("path");
const filePath =  "C:\\Users\\anits-csm\\Documents\\a24126552125\\Week5\\app.js";
console.log("File name : " , path.basename(filePath));
console.log("Extension : " , path.extname(filePath));
console.log("Directory : " , path.dirname(filePath));
console.log("Joined path: ", path.join("folder", "data", "file.txt"));


//OS MODULE 
const os = require("os");
console.log("Operating Systems:", os.platform());
console.log("Operating Systems:", os.arch());
console.log("Operating Systems:", os.cpus());
console.log("Operating Systems:", os.freemem());
console.log("Operating Systems:", os.totalmem());
console.log("Operating Systems:", os.homedir());

//HTTP MODULE

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("Hello from Node.js!");
//     res.end();
// });
// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

//EVENTS MODULE 

const EventEmitter = require("events");
const myEvent = new EventEmitter();
myEvent.on("login", () => {
    console.log("user logged in");
});
myEvent.emit("login");

//URL MODULE 
const myUrl = new URL(
    "https://example.com/products?id=10&name=phone"
);

console.log("Protocol:", myUrl.protocol);

console.log("Host:", myUrl.hostname);

console.log("Path:", myUrl.pathname);

console.log("Query:", myUrl.search);

//CRYPTO MODULE 
const crypto = require("crypto");

const hash = crypto
    .createHash("sha256")
    .update("hello")
    .digest("hex");

console.log(hash);