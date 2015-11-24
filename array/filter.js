'use strict';

var familia = [
    {
      nombre  : 'Juan Jere',
      edad    : 36
    },

    {
      nombre  : 'Gloria Marina' ,
      edad    : 35
    },
    {
      nombre  :'Juan Job' ,
      edad    : 31
    },
    {
      nombre  : 'Sefora Marina' ,
      edad    : 20
    },
    {
      nombre  : 'Josefina',
      edad    : 60
    },
];

function show(lista){
  for(var i = 0; i < lista.length; i++){
      console.log(lista[i].name);
  }
}

//show(familia);

/*var nombres = familia.forEach(function(persona){
                console.info(persona);
    });
*/
var filterNombreDePersona = function(arr, edade){
   var personaFiltrada = arr.
        filter(function(persona){
          return persona.edad >= edade;
        }).
          map(function(persona){
            return persona.nombre;
        });
    return personaFiltrada;
};

console.info(filterNombreDePersona(familia, 50));
console.info('si funsiona');

var testFamilia =
  familia.filter(function(persona){
    return persona.edad >= 31;
  }).
    map(function(persona){
      return persona.nombre;
    });

testFamilia.forEach(function(persona){
     console.info('Los ', persona);
});
