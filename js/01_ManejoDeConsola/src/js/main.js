alert("BIENVENIDO A TU APP CALCULADORA")
let userName =prompt("Enter your username")
let lastName =prompt("Enter your last name")
const age =Number(prompt("Enter your age"))
if (age !== Number) {
    alert("Esto no es un numero")
    
}
const email = prompt("Enter your email")
let phone = prompt("Enter your phone number")
let address = prompt("Enter your address")
// CONSOLE METHODS: 
// console.error(); console.warn(); console.warn();
// console.info(userName);
// console.log(lastName);
// console.log(age);
// console.log(email);
// console.log(phone);
// console.log(address);
// FORMAS DE IDENTAR COD
// console.info("Full name:",  userName,  "", lastName)
// console.info("Full name: " +  userName +  " " +  lastName)
// console.info(`Full name:"  ${userName} ${lastName}`)
// console.info("Hola, yo soy:",  userName, lastName, ",", "tengo",age, ",", "my email is", email, ",", "my phone is", phone,",", "my address is", address );
// console.info("Hola, yo soy: " +  userName +lastName + ", "+ "tengo "+ age + ", "+ "my email is " + email + ", "+ "my phone is "+ phone+ ", "+ "my address is "+ address );
// console.info(`Hola, yo soy:  ${userName} ${lastName}, tengo  ${age}, my email is ${email}, my phone is ${phone}, my address is ${address}`);

console.group("Data basic")
    console.info(userName);
    console.log(lastName);
    console.log(age);
console.groupEnd()

console.group("Data contact")
    console.log(email);
    console.log(phone);
    console.log(address);
console.groupEnd()

const coders=["Lupe Ortiz", "Pepe Rojas", "Mateo el grande"]

