"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* void */
/* Tipo explicito */
function showInfo(user) {
    console.log('userInfo', user.id, user.name);
    //return 'hola';
}
showInfo({ id: 1, name: 'Franco' });
/* Tipo Inferido */
function showFormattedInfo(user) {
    console.log('userInfo', `
        id: ${user.id} 
        userName : ${user.name}
    `);
}
showFormattedInfo({ id: 1, name: 'Franco' });
/* Tipo Void como tipo de dato en variable */
let unusable;
//unusable = null;
//unusable = undefined
/* Tipo never */
/* Representa un valor que nunca ocurre */
function handleError(code, message) {
    // Procesamiento del codigo 
    // Generamos mensaje
    throw new Error(`${message}. Code ${code}`);
}
try {
    handleError(404, 'NotFound');
}
catch (error) { }
