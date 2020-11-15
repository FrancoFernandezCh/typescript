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
var createPic = function (title, date, size) {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);
