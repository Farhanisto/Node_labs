process.on('message',(msg)=>{
console.log('Message from parent',msg);
});

let count = 0;
setInterval(()=>{
  process.send({'counter':count++});
},1000);