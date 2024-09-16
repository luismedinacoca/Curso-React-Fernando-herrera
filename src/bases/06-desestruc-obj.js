// Desestructuración - Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//! Desestructuración:
const {nombre, edad, clave} = persona;

/*
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)
*/

console.log( nombre )
console.log( edad )
console.log( clave )


const retornaPersona = (usuario) => {
    console.log("usuario: ", usuario);
}
console.log('retornaPersona(persona)')
console.log('');

retornaPersona(persona)

const retornaPersona1 = ({nombre, edad, rango = 'soldier'}) => {
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    console.log("rango: ", rango);
}
console.log('retornaPersona1(persona):')
retornaPersona1(persona);

// ! useContext: function which return an object
const _useContext = ({clave, nombre, edad, rango = 'captain'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.567,
            lng: -21.643
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = _useContext( persona );
console.log("_userContext: ", nombreClave, anios, lat, lng);

/*
Ahora las palabras "use" y "set" al principio estan reservadas y solo se pueden usar en lugares específicos.
La solución es cambiar el nombre a cualquier otro que no tenga "use" o "set" al principio.
*/