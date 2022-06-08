class Alumno {
    constructor(id, nombre, apellido, prom, est) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.prom = prom
        this.est = est
    }
}

const alumnos = []

/*/ eventos /*/

const botonAgregar = document.getElementById("botonAgregar")
botonAgregar.addEventListener("click", () => {
    agregarAlumnos()
})

const botonEliminar = document.getElementById("botonEliminar")
botonEliminar.addEventListener("click", () => {
    eliminarAlumno()
})

const botonBuscar = document.getElementById("botonBuscar")
botonBuscar.addEventListener("click", () => {
    buscarAlumnos()
})

const botonModificar = document.getElementById("botonModificar")
botonModificar.addEventListener("click", () => {
    modificarAlumnos()
})



/*/ fin de eventos /*/


function listarAlumnos() {
    let miLista = document.querySelector("#listaAlumnos")
    if (!miLista) {
        miLista = document.createElement("table")
        miLista.setAttribute("id", "listaAlumnos")
    }
    miLista.innerHTML = ""

    const encabezado = document.createElement("tr")

    const tdNombre = document.createElement("th")
    tdNombre.innerHTML = "Nombre"
    encabezado.appendChild(tdNombre)

    const tdApellido = document.createElement("th")
    tdApellido.innerHTML = "Apellido"
    encabezado.appendChild(tdApellido)

    const tdID = document.createElement("th")
    tdID.innerHTML = "ID"
    encabezado.appendChild(tdID)

    const tdPromedio = document.createElement("th")
    tdPromedio.innerHTML = "Promedio"
    encabezado.appendChild(tdPromedio)

    const tdEstado = document.createElement("th")
    tdEstado.innerHTML = "Estado"
    encabezado.appendChild(tdEstado)

    miLista.appendChild(encabezado)

    alumnos.forEach((alumno) => {
        const nodotr = document.createElement("tr")
        let nodotd = document.createElement("td")
        nodotd.innerHTML = `${alumno.nombre}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
        nodotd.innerHTML = `${alumno.apellido}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
        nodotd.innerHTML = `${alumno.id}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
        nodotd.innerHTML = `${alumno.prom}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
        nodotd.innerHTML = `${alumno.est}`
        nodotr.appendChild(nodotd)

        nodotr.appendChild(nodotd)
        miLista.appendChild(nodotr)
    })

    document.body.appendChild(miLista)
    document.body.appendChild(miLista)

var listaStore = localStorage.getItem("alumnos")

if(listaStore == null){
    
}

}

function agregarAlumnos() {

    let nota1 = Number(document.getElementById("inputNota1").value)
    let nota2 = Number(document.getElementById("inputNota2").value)
    let nota3 = Number(document.getElementById("inputNota3").value)
    var total = (nota1 + nota2 + nota3) / 3

    promedio.value = total.toFixed(2)

    if (nota1 === "" || nota2 === "" || nota3 === "") {
        alert("DEBE LLENAR LOS CAMPOS DE NOTAS")
        return false;
    }

    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert("LAS NOTAS NO PUEDEN SER MAYORES A 10")
        return false;
    }

    if (total <= 0 || total > 10) {
        promedio.value = `NADA`
    }

    var estado = 0

    if (total > 0 && total < 6) {
        estado = "DESAPROBADO"
    }

    if (total >= 6 && total <= 10) {
        estado = "APROBADO"
    }

    let id = 1;
    if (alumnos.length > 0) {
        id = alumnos[alumnos.length - 1].id + 1
    }

    let nombre = document.getElementById("inputNombre").value
    let apellido = document.getElementById("inputApellido").value
    let prom = promedio.value
    let est = estado
    let alumno = new Alumno(id, nombre, apellido, prom, est)

    if (nombre === "" || apellido === "") {
        alert("LOS CAMPOS DE NOMBRE Y APELLIDO NO PUEDEN ESTAR VACÍOS")
        return false
    }

    alumnos.push(alumno)
    console.log(alumnos)

    listarAlumnos()
    localStorageLista()
}

function eliminarAlumno() {

    let id = Number(prompt("Ingrese el id del usuario que quiere eliminar"));

    let encontrado = alumnos.find((alumno) => alumno.id === id)

    if (!encontrado) {
        alert("ALUMNO NO ECONTRADO")
    } else {

        let index = alumnos.indexOf(encontrado)

        alumnos.splice(index, 1)

        alert("ALUMNO ELIMINADO DEL SISTEMA")
        console.log(alumnos)

        listarAlumnos()
    }
}

function modificarAlumnos() {
    let id = Number(prompt("INGRESE El ID DEL ALUMNO QUE QUIERE MODIFICAR"))

    let existe = alumnos.some((alumno) => alumno.id === id)

    if (existe) {
        let encontrado = alumnos.find((alumno) => alumno.id === id)
        let nuevoNombre = prompt("INGRESE EL NOMBRE")
        let nuevoApellido = prompt("INGRESE EL APELLIDO")

        encontrado.nombre = nuevoNombre
        encontrado.apellido = nuevoApellido

        console.log(alumnos)

        listarAlumnos()
    } 
    
    else {
        alert("USUARIO NO ENCONTRADO")
    }

}


function buscarAlumnos() {
    let paramBusqueda = prompt("Ingresa el nombre que quieres buscar")

    let encontrados = alumnos.filter((alumno) =>
        alumno.nombre.toLowerCase().indexOf(paramBusqueda.toLocaleLowerCase()) !== -1 ||
        alumno.apellido.toLowerCase().indexOf(paramBusqueda.toLocaleLowerCase()) !== -1);

    return encontrados

}


function localStorageLista (){
    localStorage.setItem("alumnos", JSON.stringify(alumnos))
}

