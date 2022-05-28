function capturar (){
  function Persona (nombre, edad){
    this.nombre = nombre
    this.edad = edad
  }

  let nombreCapturar = document.getElementById("nombre").value
  let edadCapturar = document.getElementById("edad").value

  nuevaPersona = new Persona (nombreCapturar, edadCapturar)
  agregarPersona()
}

let baseDeDatos = []
function agregarPersona (){
  baseDeDatos.push (nuevaPersona)
  console.log(baseDeDatos)
}