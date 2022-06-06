class Alumno {
  constructor(id, nombre, apellido, numeroDeRegistro) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroDeRegistro = numeroDeRegistro
  }
}

class Promedio {
  constructor(id, promedio, numeroDeRegistro) {
    this.id = id
    this.promedio = promedio
    this.numeroDeRegistro = numeroDeRegistro
  }
}

const alumnos = [];
const promedios = []


mostrarMenu()

function mostrarMenu() {
  let opcion = 0;

  while (opcion !== 3) {
    opcion = Number(prompt(`Seleccione una opción:
                          1. Agregar alumno
                          2. Eliminar alumno
                          3. Salir`));

    switch (opcion) {
      case 1: {
        agregarAlumno();
        break;
      }
      case 2: {
        eliminarAlumno();
        break;
      }
      case 3: {
        alert("SISTEMA CERRADO");
        break;
      }
      default: {
        alert("INVÁLIDO");
        break;
      }

    }

  }
  
}



function agregarAlumno() {
  var nombre = prompt("INGRESE EL NOMBRE DEL ALUMNO");
  var apellido = prompt("INGRESE EL APELLIDO DEL ALUMNO");
  var numeroDeRegistro = Number(prompt("INGRESE EL NÚMERO DE REGISTRO DEL ALUMNO"))
  let alumno = new Alumno(getId(), nombre, apellido, numeroDeRegistro);

  
  alumnos.push(alumno);
  console.log("ALUMNOS")
  console.table(alumnos);

  mostrarMenuNota()

  function mostrarMenuNota() {
    let opcionNota = 0;

    while (opcionNota !== 3) {
      opcionNota = Number(prompt(`Seleccione una opción:
                              1. Agregar nota
                              2. Eliminar nota
                              3. Volver`));

      switch (opcionNota) {
        case 1: {
          agregarNota();
          break;
        }
        case 2: {
          eliminarNota();
          break;
        }

        case 3: {;
          break;
        }

        default: {
          alert("INVÁLIDO");
          break
        }
      }
    }
  }
}

function getId() {
  if (alumnos.length === 0) {
    return 1;
  } else {
    const ultimo = alumnos[alumnos.length - 1];
    return ultimo.id + 1;
  }
}

function getId2() {
  if (promedios.length === 0) {
    return 1;
  } else {
    const ultimo = promedios[promedios.length - 1];
    return ultimo.id + 1;
  }
}

function eliminarAlumno() {

  const id = Number(prompt("INGRESE EL ID QUE QUIERA BORRAR"));

  const alumnoEncontrado = alumnos.some((alumno) => alumno.id === id);

  if (alumnoEncontrado) {
    const soloIds = alumnos.map((alumno) => alumno.id)


    let indice = soloIds.indexOf(id);

    alumnos.splice(indice, 1);
    alert("ALUMNO BORRADO");

    console.table(alumnos);
  } 
  
  else 
  {
    alert("ALUMNO NO ENCONTRADO");
  }
}

function agregarNota() {
  let numeroDeRegistro = Number(prompt("INGRESE NUEVAMENTE EL NÚMERO DE REGISTRO DEL ALUMNO"))

  let numNotas = Number(prompt("INGRESE EL NUMERO DE NOTAS"))
  let notasTotales = 0;

  for (let i = 1; i <= numNotas; i++) {
    let notaActual = Number(prompt("INGRESE LA NOTA " + (i)));
    notasTotales += notaActual;

    if (notaActual > 10) {
      alert("NOTA INVALIDA")
    }

    if (notaActual <= 0) {
      alert("NOTA INVALIDA")
    }
  }

  let div = notasTotales / numNotas
  let promedio = new Promedio (getId2(), div, numeroDeRegistro)
  
  promedios.push(promedio)
  console.log("PROMEDIOS")
  console.table(promedios)

  alert("EL PROMEDIO DEL ALUMNO ES " + div)
}

function eliminarNota() {

  const id = Number(prompt("INGRESE EL ID QUE QUIERA BORRAR"));

  const promedioEncontrado = promedios.some((promedio) => promedio.id === id);

  if (promedioEncontrado) {
    const soloIds = promedios.map((promedio) => promedio.id)


    let indice = soloIds.indexOf(id);

    promedios.splice(indice, 1);
    alert("NOTA BORRADA");

    console.table(promedios);
  } 
  
  else 
  {
    alert("NOTA NO ENCONTRADA");
  }
}
