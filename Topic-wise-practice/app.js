//GLOBAL OBJECT 
global.appName = "MyNodeApp";
global.version = 1;

console.log("App Name: ", global.appName);
console.log("Version:", global.version);

function showAppInfo(){
    console.log("Inside Function");
    console.log("App Name: ", global.appName);
    console.log("Version:", global.version);
    global.greet = "Hello";
}
showAppInfo();
console.log(global.greet);

global.version = 2;

console.log("updated version :", global.version);

//CONSOLE OBJECT
console.log("hello");
console.warn("this is warning");
console.error("This is error");

//PROCESS
console.log("Process ID: ", process.pid);
console.log("Node Version:", process.version);
console.log("Operating System:", process.platform);
console.log("Current folder:", process.cwd());

//BUFFER 
const buf = Buffer.from("Hello");
console.log("Buffer:", buf);
console.log("The String is :", buf.toString());
console.log("Length", buf.length);

//__DIRNAME
console.log("the folder path is :", __dirname);

//__FILENAME
console.log("The File Path is :", __filename);

//SET TIME OUT
console.log("Start");
setTimeout( () => {
    console.log("This runs after 2 seconds");
}, 2000);
console.log("end");

//SET INTERVAL
let count = 0;
const intervalidId = setInterval ( () => {
    count++;
    console.log("Count :", count);

    if(count == 5){
        clearInterval(intervalidId);
        console.log("Interval Stopped");
    }
}, 3000);

//CLEAR TIME OUT
console.log("started");
const timerId = setTimeout( () => {
    console.log("This message should appear");
}, 5000);
clearTimeout(timerId);
console.log("Finished");