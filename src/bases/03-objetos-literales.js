const persona = {
    nombre: 'Luis',
    apellido: 'Medina',
    edad: 45,
    direccion: {
        ciudad: 'Mendoza',
        zip: 5501,
        lat: 16.365545,
        lng: 55.6984267,
    }
};

console.log({persona:persona})
console.table(persona)
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)

const persona2 = persona;

console.log(persona2)
persona2.nombre = 'Javier';

console.log(persona)
console.log(persona2)


const persona3 = {...persona}
persona.nombre = 'Luis';

console.log(persona)
console.log(persona3)