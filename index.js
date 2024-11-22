//Undertand the Node.js architecture


//----Event driven


// const EventEmitter=require('events');
// const eventEmitter=new EventEmitter();

// eventEmitter.on('event',(()=>{
//     console.log("yes i am working");
// }));

// eventEmitter.emit('event');


//    Non-blocking I/O
const fs=require('fs');
fs.readFile("file.txt",'utf-8',(err,data)=>{
if(err) 
{   
    throw err;
}
console.log(data);
})
console.log("First i will give the output");
