const nuevoh1 = document.createElement("h1")
document.body.appendChild(nuevoh1)

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

const h1 = document.getElementsByTagName("h1")[0]
h1.innerText = `Hola, ${nombre} ${apellido}`