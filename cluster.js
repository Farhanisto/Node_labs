const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){
  const cpus = os.cpus().length;
  console.log(`forking for ${cpus} cpu`);
  for(i=0 ;i <= cpus; i++){
    cluster.fork();
  }
  //console.dir(cluster.workers, {depth:0});

  //Sending messages to all the workers
  Object.values(cluster.workers).forEach((worker)=>{
    worker.send(`Hello worker worker id ${worker.id}`);
  })
}else{
   require('./serverLoadBalancing')
}