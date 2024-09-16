// PROMISES
import { getHeroeById } from "./bases/08-import-export";

/*
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //console.log('2 segundos después')
        /*
        Tarea:
        Importat el 
        */
       /*
        const heroe = getHeroeById(2);
        resolve(heroe)
        //console.log(heroe);
        //resolve();
    }, 5000)
});

promesa.then( (heroe) => {
    console.log('heroe: ', heroe.name)
})
.catch(err => console.warn(err));
*/

const getHeroesByIdAsync = (id) => {
    //const promesa = new Promise( (resolve, reject) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            } else {
                reject ('No se encontró el héroe');
            }
            resolve(heroe)
        }, 2000)
    });
    //return promesa;
}

getHeroesByIdAsync(14)
//.then(hero => console.log("heroe: ", hero))
.then( console.log )
//.catch( (err) => console.warn(err));
.catch(console.warn);