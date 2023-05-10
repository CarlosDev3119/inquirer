const fs = require('fs');
const inquirer = require('inquirer');
// inquirer
//   .prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Ingresa tu nombre'
//     },
//     {
//         type: 'number',
//         name: 'edad',
//         message: 'Ingresa tu edad'
//     },
//   ])
//   .then((answers) => {
//     console.log(answers)
//   })
//   .catch((error) => {
//     console.log(error)
// });

// const inquirer = require('inquirer');

const preguntas = [
  {
    type: 'input',
    name: 'nombre',
    message: '¿Cuál es el nombre del usuario?'
  },
  {
    type: 'input',
    name: 'email',
    message: '¿Cuál es el correo electrónico del usuario?'
  }
];

inquirer.prompt(preguntas)
  .then(respuestas => {
    // Leer la data actual del archivo JSON
    const data = JSON.parse(fs.readFileSync('usuarios.json', 'utf-8'));
    // // Agregar el nuevo usuario a la data
    data.push(user);

    // // Escribir la data actualizada al archivo JSON
    fs.writeFileSync('usuarios.json', JSON.stringify(data));

    console.log(`El usuario ${respuestas.nombre} ha sido registrado correctamente.`);
  })
  .catch(error => {
    console.log(error);
});