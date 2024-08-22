// Ejercicio 1: comparar edad
let edad = prompt ("ingresa tu edad: ")
if (edad >= 18) {
    console.log ("es mayor de edad")
    
}
else{
    console.log ("No es mayor de edad")
}

// Ejercicio 2:  Numero positivo o negativo

let Num = prompt ("ingrese un numero ")
if (Num >= 0) {
    console.log ("el numero es positivo")
    
}
else{
    console.log ("el numero es negativo")
}
// Ejercicio 3:  par o impar

let num1 = parseInt (prompt(" ingresa un número:"))
if (num1 % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

// Ejercicio 4: Calculo de descuento
let total = parseInt(prompt ("ingrese el total de la compra: "))
let descuento = total * 10 / 100
let totalDescuento = total - descuento
if (total >= 100) {
    console.log ("el total con descuento es: " + totalDescuento)
}
else {
    console.log ("el total sin descuento es: " + total)
}
// Ejercicio 5: Comparar dos numeros

let valor = prompt (" ingrese un numero: ")
let valor1= prompt (" Ingrese otro numero ")
if (valor > valor1) {
    console.log(" el numero mayor es: " + valor)
}
else if (valor1 > valor) {
    console.log("el numero mayor es: " + valor1)
    
}
else if (valor1 === valor) {
    console.log("el numero " + valor1 + " es igual a " + valor)
    
}

// Ejercicio 6: Clasificación por Edad

let edad2 = prompt ("ingrese su edad: ")
if (edad2 < 12) {
    console.log ("eres un niño")
}
else if (edad2 >= 12 && edad2 <= 17) {
    console.log (" eres un adolecente")
}
else if (edad2 >= 18 && edad2 <= 64) {
    console.log ("eres un adulto")
}
else if (edad2 >= 65) {
    console.log ("eres un adulto mayor")
}

// Ejercicio 7: Clasificación de Notas

let nota = prompt ("ingrese una nota entra 0 y 100: ")
if (nota >= 90) {
    console.log ("Exelente")
}
else if (nota >= 70 && nota <= 89) {
    console.log ("Buena")
}
else if (nota >= 50 && nota <= 69) {
    console.log ("Regular")
}
else if (nota < 50) {
    console.log ("Insuficiente")
}
// Ejercicio 8: Elección de Menú
let menu = parseInt (prompt ("opción de menú: 1 para Pizza, 2 para Hamburguesa, 3 para Tacos"))
switch (menu) {
    case 1:
        console.log ("Elegiste Pizza")
        break;
    case 2:
        console.log ("Elegiste Hamburguesa")
        break;
    case 3:
        console.log ("Elegiste Tacos")
        break;

    default:
        console.log ("Opcion no valida")
        break;
}
// Ejercicio 9: Tipo de Triángulo 
let lado1 = parseInt (prompt (" ingrese los 3 laados de un triangulo. lado 1: "))
let lado2 = parseInt (prompt (" lado 2: "))
let lado3 = parseInt (prompt (" lado 3: "))
if (lado1 == lado2 && lado1 == lado3) {
    console.log("el triangulo es equilatero");
}
else if (lado1 == lado2 || lado1 == lado3) {
    console.log("el triangulo es isosceles");
}
else{
    console.log("el triangulo es escaleno");
}
// Ejercicio 10: Adivinar un Número
let adivinarNum = prompt("adivina un numero del 1 al 10!! ")
let NumSecreto = 7
if (adivinarNum == NumSecreto) {
    console.log("FELICIDADES!! adivinaste el numero");
}
else {
    console.log("Lo siento, el numero es incorrecto");
}

// Ejercicio 11: Cálculo del Precio Final

let Precio = parseInt (prompt ("ingrese el precio base: "))
let descuento15 = Precio * 15 / 100
let totalDescuento1 = Precio - descuento15

let descuento10 = Precio * 10 / 100
let totalDescuento2 = Precio - descuento10

let descuento5 = Precio * 5 / 100
let totalDescuento3 = Precio - descuento5
if (Precio > 500) {
    console.log ("el total con el descuento es de: $" + totalDescuento1)
}
else if (Precio >= 300 && Precio <= 500) {
    console.log ("el total con el descuento es de: $" + totalDescuento2)
}
else if (Precio < 300) {
    console.log ("el total con el descuento es de: $" + totalDescuento3)
}

// Ejercicio 12: Verificar el Año Bisiesto

let año = parseInt(prompt(" ingresa un año:"));
if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log("El año " + año + " es bisiesto.");
} else {
    console.log("El año " + año + " no es bisiesto.");
}
