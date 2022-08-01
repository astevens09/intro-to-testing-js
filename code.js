// helloWorld function
// function helloWorld() {
//     return "Hello, World!";
//     // console.log("Hello, World!");
// }

const helloWorld = function(){
  return "Hello, World!";
}

function sayHello(name){

  if(typeof name !== 'string')
    return "Hello, World!";
  return "Hello, "+name+"!";
}

function isFive(num){

  return num===5;
};

function isEven(num){
  if(typeof num === 'boolean')
    return false;
  return num%2===0;
}
