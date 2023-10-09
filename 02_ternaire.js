
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return a > b ? a : b;
}


let a = 5;
let b = 5;
console.log(a,b,ternaire(a,b));

module.exports = ternaire;