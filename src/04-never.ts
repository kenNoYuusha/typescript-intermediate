//es un tipo inferido en caso que una funcion
//caiga en un ciclo infinito
const withoutEnd = () => {
  while(true) {
    console.log("nunca pares de aprender")
  }
}
//o en caso la funcion detenga la ejecucion del programa.
const fail = (message: string) => {
  throw new Error(message);
}
