"use strict";
//  ------------------ NULL ------------------
// Explicita
var nullVariable;
nullVariable = null;
// nullVariable = 1; // --> Error
// Inferido
var otherVariable = null; // --> any
otherVariable = 'test';
console.log('nullVariable : ', nullVariable);
console.log('otherVariable : ', otherVariable);
//  ----------------- UNDEFINED -----------------
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // --> Error
var otherUndefined = undefined; // --> any
otherUndefined = 1;
console.log('undefinedVariable : ', undefinedVariable);
console.log('otherUndefined : ', otherUndefined);
//  ------- NULL y UNDEFINED: como subtipos -------
/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */
var albumName;
// albumName = null;
// albumName = undefined;
