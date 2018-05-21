const http = require('http');
const {fork} = require('child_process');

const server = http.createServer();

server.on('request', (req, res)=>{
   if(req.url === '/compute'){
     //sum= longComputation();
     //res.end(`The result is ${sum}`);
     const compute = fork('compute.js');
     compute.send('start');
     compute.on('message',(msg)=>{
       res.end(`the sum is ${msg}`)
     });
   }else{
     res.end('OK');
   }
});

server.listen(3005, ()=>{
  console.log('server started at port 3005')
});