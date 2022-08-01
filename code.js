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

function isVowel(vowel){
  // console.log(typeof vowel);

if(vowel==='a'||vowel==='e'||vowel==='i'||vowel==='o'||vowel==='u'){
  return true;
}else if(vowel==='A'||vowel==='E'||vowel==='I'||vowel==='O'||vowel==='U'){
  return true;
}else{
  return false;
}

  // if(vowel === 'a'){
  //   // console.log(vowel === 'a');
  //   return true;
  // }else if(vowel === 'A'){
  //   return true;
  // }else if(vowel === 'y'){
  //   return false;
  // }else if(vowel === 4){
  //   return false;
  // }else if(vowel === true){
  //   return false;
  // }else if(vowel === false){
  //   return false;
  // }else if(vowel === "banana"){
  //   return false;
  // }else if(typeof vowel === 'undefined'){
  //   return false;
  // }
  //
  // return true;

}
