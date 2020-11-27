"use strict";
// Funciones en TypeScript
// Usamos TS, definimos tipos para paramentros
//function createPicture(title:string, date: string, size: SquareSize) {
// Se crea la fotografia
//    console.log('create Picture using', title, date, size);
//}
createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia', '2020-03-20'); // --> Error
// Parametros opcionales
function createPicture(title, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
// Flat Array Function
let createPic = (title, date, size) => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size };
};
const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);
// Tipos de retorno con TypeScript
function handleError(code, message) {
    // Procesamiento de codigo, mensaje
    if (message === "Error") {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return "An error has ocurred";
    }
}
try {
    let result = handleError(400, "Ok");
    console.log(result);
    result = handleError(400, "Error");
    console.log(result);
}
catch (error) {
    console.log(error.message);
}
