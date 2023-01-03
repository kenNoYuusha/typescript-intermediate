//te la la flexibilidad del tipo any pero con la salvedad
//que te marca error hasta que no valides el tipo.
let unknowVar: any;
unknowVar = 2545;
unknowVar = true;
unknowVar = {}
unknowVar = "Mi nombre";

if(typeof unknowVar === "string"){
  unknowVar = unknowVar.toUpperCase();
}


console.log(unknowVar)
