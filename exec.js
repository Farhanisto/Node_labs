const {exec} =  require('child_process');
exec('find . -type f |wc l', (err, stdout, stderr)=>{
   if(err){
     console.error(`exec error:${err}`);
   }
   console.log(stdout)
});

// same file using spawn
const {spawn} = require('child_process');
const child = spawn('find',['.','-type', 'f'],{
  stdio: 'inherit',
  shell: true,
  cwd: 'users/farhanabdi/downloads',
  env: {},
  detach: true
})