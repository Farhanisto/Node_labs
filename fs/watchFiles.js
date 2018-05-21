const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname,'files');
const currentFiles = fs.readdirSync(dirname);

const logTime = (message) =>{
  console.log(`${new Date().toUTCString()}: ${message}`);
}

fs.watch(dirname,(eventType, filename)=>{
  if(eventType == 'rename'){ //either add or delete
      const index = currentFiles.indexOf(filename);
      if(index>=0){
        currentFiles.splice(index, 1);
        logTime(`${filename} was deleted`)
      }
  }
  currentFiles.push(filename);
  logTime(`${filename} was added`);

  logTime(`The file was changed ${filename}`);
});