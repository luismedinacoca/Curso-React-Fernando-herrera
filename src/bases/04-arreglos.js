// arreglo en JS
const arreglo = new Array(100);
arreglo.push(1);
console.log("arreglo: ", arreglo)

const newArray = [];
newArray.push(1)
newArray.push(2)
newArray.push(3)
newArray.push(4)
console.log("newArray: ", newArray);
/* //TODO: better spread than push */

const arreglo2 = [1, 2, 3, 4];
console.log("arreglo2: ", arreglo2);
console.log("Spread operator:")//! Spread operator:
console.log("let arreglo3 = [...arreglo2, 5]")
let arreglo3 = [...arreglo2, 5]; 
console.log("arreglo3: ", arreglo3);
console.log()

console.log("arreglo2: ", arreglo2);
const arreglo4 = arreglo2.map(function(numero){
    return numero * 2;
})
console.log("arreglo4: ", arreglo4)