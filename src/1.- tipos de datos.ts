//--------- Number ------------
// Explicito
let phone: number
phone = 1
phone = 3023455882
// phone = 'hola' // Error

// Inferido
let phoneNumber = 3023455882
phoneNumber = 123
// phoneNumber = true // Error de tipo

let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744


//---------- Bolean ----------
// Tipado Explicito
let isPro: boolean 
isPro = true
isPro = false
// isPro = 1 // Error

// Inferido
let isUserPro = false
isUserPro = true
// isUserPro = 10 // Error


//------------ String ------------
// Explicito
let username: string = 'luixaviles'
username = 'Juan'
// username = true // Error

// Template String
// Uso de back-tick `
let userInfo: string
userInfo = `
  User Info: 
  username: ${username}
  firstName: ${username} Gonzalez
  phone: ${phone}
  isPro: ${isPro}
`

console.log(userInfo)