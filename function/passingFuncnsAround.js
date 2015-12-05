// In JavaScript, functions can be passed around like any other value.

// Here is a simple example. 

function say (word){
  console.info(word);
}

function execute(someFun, value){
  someFun(value);
}

execute(say,'Hola happy amigo');


// We can define and pass a function as a parameter to another function in-place

// Remember that is execute that one that's is executed. ( )

execute(function(word){ 
  console.info('anonymous function ',word);
}, 'Hello');

