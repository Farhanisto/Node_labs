
const {spawn} = require('child_process');
//const child = spawn('find',['.', 'type', 'f']);
//const child = spawn('wc');
const find =spawn('find',['.', 'type', 'f']);
const wc = spawn('wc',['-l']);
find.stdout.pipe(wc.stdin);
//process.stdin.pipe(child.stdin);

wc.stdout.on('data', function(data){
  console.log(`child process stdout \n ${data}`);
});

wc.stdout.on('error', function(data){
  console.log(`child process stderr \n ${data}`);
});

wc.on('exit',function(code,signal){
  console.log(`child process existed with code ${code} and signal ${signal}`);
});


