
// Funciones en JS
function saludar(nombre){
    return `Hola, ${nombre}`;
}

saludar = 30;
console.log(saludar);

//******************************

const greetings = function(name){
    return `Hello, ${name}`;
}
//greetings = 20;
console.log(greetings)
console.log(greetings('Vegeta'))

//******************************

// TODO: arrow function
const greetings02 = (name) => {
    return `Hello, ${name}`;
}
console.log(greetings02('Luis Medina'))

//******************************

// TODO: arrow function - one line only
const greetings03 = (name) => `Hello, ${name}`;
const greetings04 = () => `Hello World!`;

console.log(greetings03('Luiggie'))
console.log(greetings04())

//******************************

const getUser = () => {
    return {
        uid: 'E9IEREFH0',
        username: 'winter_is_coming',
    }
}

console.log(getUser())

//******************************
// function without return when it's an object
const getUser01 = () => ({
    uid: 'E9IEREFH0',
    username: 'winter_is_coming',
})
console.log("getUser01(): ", getUser01())

//******************************

// Tarea:
/*
1. Transformar a una ción de flecha
2. Tiene que devolver un objeto implícito
3. Probar
 */

function getUsuarioActivo( nombre ) {
    return {
        uid: '34H13VB0',
        nombre_usuario: nombre,
    }
}
console.log(getUsuarioActivo('Luiggie Medina'))


const getActiveUser = (name) => ({
    uid: '33VB4H17',
    nombre_usuario: name,
})
console.log(getActiveUser('Javi'));