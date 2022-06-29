class Alumno {
    constructor(id, nombre, apellido, prom, est) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.prom = prom
        this.est = est
    }
}

let alumnos = []


function tomarDatos () {
    if (localStorage.key("Alumnos") !== null) {
        alumnos = JSON.parse(localStorage.getItem("Alumnos"))
    } else {
        localStorage.setItem("Alumnos", JSON.stringify(alumnos))
    }
}

tomarDatos()

function recibirDatos() {
    localStorage.setItem("Alumnos", JSON.stringify(alumnos))
}

/*/ eventos /*/

const botonAgregar = document.getElementById("botonAgregar")
botonAgregar.addEventListener("click", () => {
    agregarAlumnos()

    const form = document.getElementById("form")
    form.reset()

})

const botonEliminar = document.getElementById("botonEliminar")
botonEliminar.addEventListener("click", () => {
    eliminarAlumno()
})

const botonModificar = document.getElementById("botonModificar")
botonModificar.addEventListener("click", () => {
    modificarAlumnos()
})

const botonListar = document.getElementById("botonListar")
botonListar.addEventListener("click", () => {
    listarAlumnos()
})

const botonCargar = document.getElementById("botonCargar")
botonCargar.addEventListener("click", () => {
    cargarAlumnos()
})


/*/findeeventos/*/

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


}

function agregarAlumnos() {

    let nota1 = Number(document.getElementById("inputNota1").value)
    let nota2 = Number(document.getElementById("inputNota2").value)
    let nota3 = Number(document.getElementById("inputNota3").value)
    var total = (nota1 + nota2 + nota3) / 3

    promedio.value = total.toFixed(2)

    if (nota1 === "0" || nota2 === "0" || nota3 === "0") {
        Swal.fire({
            title: 'DEBE LLENAR LOS CAMPOS DE NOTAS',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return false;
    }

    if (nota1 === "" && nota2 === "" && nota3 === "") {
        Swal.fire({
            title: 'DEBE LLENAR LOS CAMPOS DE NOTAS',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return false;
    }

    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        Swal.fire({
            title: 'LAS NOTAS NO PUEDEN SER MAYORES A 10',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return false
    }

    var estado = 0

    total > 6 ? estado = "APROBADO" : estado = "DESAPROBADO"

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

        Swal.fire({
            title: 'LOS CAMPOS DE NOMBRE Y APELLIDO NO PUEDEN ESTAR VACÍOS',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return false
    }
    alumnos.push(alumno)

    tomarDatos()
    listarAlumnos()

    Toastify({
        text: 'ALUMNO AGREGADO',
        gravity: 'top',
        position: 'right',
        style: {
            background: 'black'
        },
        duration: 3000,
    }).showToast();

}

function eliminarAlumno() {

    let id = Number(prompt("INGRESE EL ID DEL ALUMNO QUE QUIERE ELIMINAR"));

    let encontrado = alumnos.find((alumno) => alumno.id === id)

    if (!encontrado) {
        Swal.fire({
            title: 'ALUMNO NO ENCONTRADO!',
            icon: 'error',
            confirmButtonText: 'OK'
        })

    } else {

        let index = alumnos.indexOf(encontrado)

        alumnos.splice(index, 1)

        Swal.fire({
            title: "EL ALUMNO HA SIDO ELIMINADO DEL SISTEMA",
            icon: 'success',
            confirmButtonText: 'OK'
        })

        console.log(alumnos)
        tomarDatos()
        listarAlumnos()
    }
}

function modificarAlumnos() {
    let id = Number(prompt("INGRESE El ID DEL ALUMNO QUE QUIERE MODIFICAR"))

    let existe = alumnos.some((alumno) => alumno.id === id)

    if (existe) {
        let encontrado = alumnos.find((alumno) => alumno.id === id)
        let opcion = 0

        let nuevoNombre = prompt("INGRESE EL NOMBRE")
        let nuevoApellido = prompt("INGRESE EL APELLIDO")

        encontrado.nombre = nuevoNombre
        encontrado.apellido = nuevoApellido

        console.log(alumnos)
        tomarDatos()
        listarAlumnos()

        Toastify({
            text: 'ALUMNO EDITADO',
            gravity: 'top',
            position: 'right',
            style: {
                background: 'black'
            },
            duration: 3000,
        }).showToast();

    } else {
        Swal.fire({
            title: 'ALUMNO NO ENCONTRADO!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

}

function cargarAlumnos() {
    fetch('./alumnos.json')
        .then(respuesta => respuesta.json())
        .then(alumnos => {

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

            alumnos.forEach(alumno => {
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
                miLista.appendChild(nodotr);
            });

            document.body.appendChild(miLista)
            document.body.appendChild(miLista)

        })
        .catch(error => console.log('Hubo un error : ' + error.message))
}