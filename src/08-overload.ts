// input Jorge  => [J,o,r,g,e];
// input [J,o,r,g,e] => Jorge;

// primera sobrecarga
function parseName(input:string):string[];
// segunda sobrecarga
function parseName(input:string[]):string;
// tercera sobrecarga con los tipos involucrados y se realiza operacion
function parseName(input: string | string[]):string | string[]{

  if(Array.isArray(input)){
    return input.join("");
  } else {
    return input.split("")
  }

}
//gracias a la sobrecarga al saber que regresa un string se pueden aplicar los metodos de los strings
const rta1:string = parseName(["J","o","r","g","e"]).toUpperCase();
//igualmente se pueden aplicar los metodos de los arrays.
const rta2:string[] = parseName("Jorge").reverse();

console.log("rta1", rta1);
console.log("rta2", rta2);
