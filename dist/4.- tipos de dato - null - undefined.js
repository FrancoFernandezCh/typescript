"use strict";
//  ------------------ NULL ------------------
// Explicita
let nullVariable;
nullVariable = null;
// nullVariable = 1; // --> Error
// Inferido
let otherVariable = null; // --> any
otherVariable = 'test';
console.log('nullVariable : ', nullVariable);
console.log('otherVariable : ', otherVariable);
//  ----------------- UNDEFINED -----------------
let undefinedVariable = undefined;
// undefinedVariable = 'test'; // --> Error
let otherUndefined = undefined; // --> any
otherUndefined = 1;
console.log('undefinedVariable : ', undefinedVariable);
console.log('otherUndefined : ', otherUndefined);
//  ------- NULL y UNDEFINED: como subtipos -------
/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */
let albumName;
// albumName = null;
// albumName = undefined;
