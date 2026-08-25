const fs = require('fs');

fs.readFile('task.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

fs.writeFile('hello.txt', 'Hello Node.js', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File created');
})

fs.appendFile('hello.txt' , '\nWelcome', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Added Successfully')
})

// fs.unlink('task.txt',(err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File Deleted');
// })

fs.access('hello.txt', fs.constants.F_OK,(err) =>{
    if(err) {
        console.log('File does not exist');
    }
    else{
        console.log('File exists')
    }
})


//synchronous 
console.log('1');
const data = fs.readFileSync('task.txt', 'utf8');
console.log(data);
console.log('2');