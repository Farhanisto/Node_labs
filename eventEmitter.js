const EventEmitter = require('events');

class WithLog extends EventEmitter{

  execute(taskFunction){
     console.log('Before executing');
     this.emit('begin');
     taskFunction();
     this.emit('end');
     console.log('finished executing');
  }
}

const withLog = new WithLog();
withLog.on('begin', ()=>{ console.log('About to execute');});
withLog.on('end', ()=> {console.log('Done executing');});

withLog.execute(()=>{console.log('** executing task***')})