// In JavaScript, functions can be passed around like any other value.

// Here is a simple example. 

function say (word){
  console.info(word);
}

function execute(someFun, value){
  someFun(value);
}

execute(say,'Hola happy amigo')