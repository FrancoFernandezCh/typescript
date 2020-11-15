// Funciones en TypeScript

// // Crear una Fotografia: JS
// function createPicture(title, date, size) {
//     // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'
// Usamos TS, definimos tipos para paramentros
//function createPicture(title:string, date: string, size: SquareSize) {
    // Se crea la fotografia
//    console.log('create Picture using', title, date, size);
//}

createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia', '2020-03-20'); // --> Error

// Parametros opcionales
function createPicture(title?:string, date?: string, size?: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
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
function handleError(code: number, message: string): never | string{
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
    console.log(result)
    result = handleError(400, "Error");
    console.log(result)
} catch (error) {
    console.log(error.message)
}
