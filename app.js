const obtenerTotal = require('./helpers/funciones')

// Crea una función que tome un arreglo de números como parámetro y devuelva la suma de todos los elementos. 
// Utiliza inquirer para pedir al usuario que ingrese los elementos del arreglo.

const main = async () => {
    const resp = await obtenerTotal();
    console.log(resp);
}
main();



