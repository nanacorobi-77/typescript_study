export {};
//return がないのはvoid
//呼び元に帰ってこない関数はnever型

function error(message: string): never{
  throw new Error(message);
}
try {
  let result = error('test');
  console.log({result});
  
}catch (error) {
  console.log({error});
  
}