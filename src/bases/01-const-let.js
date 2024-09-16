const nombre = 'Luis';
const apellido = 'Medina';
let valorDado = 7;

console.log(nombre, apellido, valorDado)

// var NO se debe usar...
if(true){
    let valorDado = 6;
    console.log("valorDado dentro del scope: " + valorDado);
}

console.log("valorDado fuera del scope: " + valorDado)