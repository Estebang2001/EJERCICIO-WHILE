let numero = Math.floor(Math.random() * 100) + 1;
let adivinado = false

while (!adivinado) {

    let num = prompt("Hola, adivina el número entre 1 y 100");
    console.log(numero)

    if (num == numero) {
        alert("Felicitaciones, adivinaste el número");
        adivinado = true
    } else {
        alert("No adivinaste, perdiste :(");
    }
}