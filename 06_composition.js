/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

const concat = (arr1, arr2) => [...arr1,...arr2];

let concatArr1 = [1, 2, 3];
let concatArr2 = [4, 5, 6];

console.log(concatArr1,concatArr2,concat(concatArr1,concatArr2));

/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */

const push = (arr, item) => [...arr, item];

let pushArr1 = [1, 2, 3];
let pushValue = 4

console.log(pushArr1,pushValue,push(pushArr1,pushValue));

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

const merge = (obj1, obj2) => ({...obj1, ...obj2});

let mergeObject1 = {a: 1, b: 2};
let mergeObject2 = {c: 3, d: 4};

console.log(mergeObject1,mergeObject2,merge(mergeObject1,mergeObject2));

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

const setName = (obj, name) => ({...obj, ...name});

let setNameOject1 = {name: 'toto'};
let nameUpdate = {name: 'titi'};

console.log(setNameOject1,nameUpdate,setName(setNameOject1,nameUpdate));

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}