const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//export const owners = ['DC', 'Marvel'];
//export default heroes;
//! index:    import heroes, {owners} from './../';


const owners = ['DC', 'Marvel'];
/*
export {
    heroes,
    owners
}  
*/
//! index:   import {heroes, owners} from './../';

export {
    heroes as default,
    owners
}
//! index:    import heroes, {owners} from './../';