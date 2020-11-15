"use strict";
/* Any */
/* Usado para datos que cambiar dinamicamente
   API o librerias externas que cambian sus resultados */
/* Tipó explicito */
var idUser;
idUser = 1; // number
idUser = '1'; //string
console.log('idUser', idUser);
/* Tipo inferido */
var otherId;
otherId = 1; // number
otherId = '1'; //string
console.log('otherId', otherId);
var surprise = 'Hola TypeScipt';
var res = surprise.substring(5); // Error en tiempo de ejecucion potencial.
console.log('res', res);
