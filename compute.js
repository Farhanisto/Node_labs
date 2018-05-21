const longComputation =()=>{
  let sum = 0;
  for(i = 0; i<=1e9; i ++){
    sum+=0;
  };
  return sum;
};

process.on('message',(msg)=>{
  const sum = longComputation();
  process.send(sum);
})