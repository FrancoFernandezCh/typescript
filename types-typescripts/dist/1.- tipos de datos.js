"use strict";
//--------- Number ------------
// Explicito
let phone;
phone = 1;
phone = 3023455882;
// phone = 'hola' // Error
// Inferido
let phoneNumber = 3023455882;
phoneNumber = 123;
// phoneNumber = true // Error de tipo
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//---------- Bolean ----------
// Tipado Explicito
let isPro;
isPro = true;
isPro = false;
// isPro = 1 // Error
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10 // Error
//------------ String ------------
// Explicito
let username = 'franco.fernandez';
username = 'Franco';
// username = true // Error
// Template String
// Uso de back-tick `
let userInfo;
userInfo = `
  User Info: 
  username: ${username}
  firstName: ${username} Fernandez
  phone: ${phone}
  isPro: ${isPro}
`;
console.log(userInfo);
