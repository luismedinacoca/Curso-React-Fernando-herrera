//import { heroes } from '../data/heroes';  //? manually
//import { heroes } from "../data/heroes";  //? snippets
//import { heroes } from "../data/heroes";  //? forced import

import heroes, { owners } from "../data/heroes";

export const getHeroeById = (id) => heroes.find(hero => hero.id === id);

console.log(getHeroeById(1));
console.log(getHeroeById(2));
console.log(getHeroeById(3));
console.log(getHeroeById(4));
console.log(getHeroeById(5));
console.log('')

export const getHeroeByOwner = (owner) => heroes.filter(hero => hero.owner == owner);
console.log(getHeroeByOwner('DC'));
console.log(getHeroeByOwner('Marvel'));
console.log('')

console.log('owners: ', owners)

