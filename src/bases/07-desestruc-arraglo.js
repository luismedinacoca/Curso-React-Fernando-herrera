// Desestructuración de Arrays:


const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes);
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
console.log('')

const [p1] = personajes;
console.log("const [p1] = personajes;")
console.log(p1)

const [, p2] = personajes;
console.log("const [, p2] = personajes;")
console.log(p2);

const [, , p3] = personajes;
console.log("const [, , p3] = personajes;")
console.log(p3);

const returnArray = () =>{
    return ['ABC', 213];
}
console.log('')

console.log("returnArray():", returnArray());
const [letras, numeros] = returnArray();
console.log("const [letras, numeros] = returnArray();")
console.log("letras:", letras)
console.log("numeros:", numeros)
console.log('')


// Tarea:
/*
1. el primer valor del arr se llamará nombre
2. se llamará setNombre
 */
const _useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo!')}];
}


// ! an array which second element is a function:
const [nombre, setNombre] = _useState('Goku');
setNombre();

