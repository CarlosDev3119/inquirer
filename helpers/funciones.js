const inquirer = require('inquirer');


// const sumarNumeros = ( answers = {}) => {
//     //separar string por ,
//     const newArray = []
//     const elementos = answers.elementos.split(',')

//     let acumulador = 0;

//     for(let i = 0; i < elementos.length; i++){
//         let numeroString = elementos[i].trim()
//         let numero = Number(numeroString);
//         newArray.push( numero );
//     }

//     for(let i = 0; i < newArray.length; i++){
//         acumulador = acumulador + newArray[i];
//     }

//     return acumulador;
// }


const sumarNumeros = ( answers = {}) => {
    //separar string por ,
    const elementos = answers.elementos.split(',').map( num => Number( num.trim() ) );
    let acumulador = elementos.reduce((total, num) => total + num, 0);
    return acumulador;
}

const obtenerTotal = async () => {
    try{
        const answers = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'elementos',
                        message: 'Ingresa los numeros separados por comas: '
                    }
                ])

        const acumulador = sumarNumeros(answers);

        return acumulador;

    }catch(error){
        console.error(error);
    }
}

module.exports = obtenerTotal;
