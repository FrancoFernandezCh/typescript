/* Any */
/* Usado para datos que cambiar dinamicamente
   API o librerias externas que cambian sus resultados */

/* Tipó explicito */

let idUser:any;
idUser =1;   // number
idUser ='1' //string
console.log('idUser',idUser);

/* Tipo inferido */

let otherId;
otherId =1;   // number
otherId ='1' //string

console.log('otherId',otherId);

let surprise: any = 'Hola TypeScipt';
const res = surprise.substring(5); // Error en tiempo de ejecucion potencial.
console.log('res',res);
