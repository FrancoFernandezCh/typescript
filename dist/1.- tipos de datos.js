"use strict";
//--------- Number ------------
// Explicito
var phone;
phone = 1;
phone = 3023455882;
// phone = 'hola' // Error
// Inferido
var phoneNumber = 3023455882;
phoneNumber = 123;
// phoneNumber = true // Error de tipo
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//---------- Bolean ----------
// Tipado Explicito
var isPro;
isPro = true;
isPro = false;
// isPro = 1 // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10 // Error
//------------ String ------------
// Explicito
var username = 'franco.fernandez';
username = 'Franco';
// username = true // Error
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n  User Info: \n  username: " + username + "\n  firstName: " + username + " Fernandez\n  phone: " + phone + "\n  isPro: " + isPro + "\n";
console.log(userInfo);
