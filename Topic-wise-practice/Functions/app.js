

//Arrow function 
const add = (a,b) =>{
    return a + b;
};
console.log(add(5,3));

//Anonymous Function
const greet = function(){
    console.log("Hello");
};
greet();

//CallBack Function
function greeting(){
    console.log("Hello from CallBack");
}
function process(callback){
    console.log("Doing something");
    callback();
}
process(greeting);

//Promise
const promise = new Promise((resolve, reject) =>{
    let success = true;
    if(success){
        resolve("Task Completed");
    }
    else{
        reject("Task failed");
    }
});
promise
.then((result) =>{
    console.log(result);
})
.catch((error) => {
    console.log(error);
});