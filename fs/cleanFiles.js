const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname,'files');

const files = fs.readdirSync(__dirname,'files')
const ms1day = 1000*60*60*24;

files.forEach(file =>{
  const filePath = path.join(__dirname,file);
  fs.stat(filePath, (err, stats)=>{
     if(err) throw err;
     if(Date.now() - stats.mtime.getTime() > 7* ms1day){
       fs.unlink(filePath,(err)=>{
           if (err) throw err;
           console.log('file deleted',filePath);
       } )
     }
  });
});