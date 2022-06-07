class Alumno {
    constructor(id, nombre, apellido, prom, estado) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.prom = prom
    }
}

const alumnos = []

/*/ inputs /*/

const inputNombre = document.createElement("input")
inputNombre.type = "text"
inputNombre.id = "inputNombre"
inputNombre.placeholder = "NOMBRE"
document.body.appendChild(inputNombre)

const inputApellido = document.createElement("input")
inputApellido.type = "text"
inputApellido.id = "inputApellido"
inputApellido.placeholder = "APELLIDO"
document.body.appendChild(inputApellido)

const inputNota1 = document.createElement("input")
inputNota1.type = "number"
inputNota1.id = "inputNota1"
inputNota1.placeholder = "NOTA 1"
document.body.appendChild(inputNota1)

const inputNota2 = document.createElement("input")
inputNota2.type = "number"
inputNota2.id = "inputNota2"
inputNota2.placeholder = "NOTA 2"
document.body.appendChild(inputNota2)

const inputNota3 = document.createElement("input")
inputNota3.type = "number"
inputNota3.id = "inputNota3"
inputNota3.placeholder = "NOTA 3"
document.body.appendChild(inputNota3)

const promedio = document.createElement("input")
promedio.type = "number"
promedio.id = "promedio"
promedio.placeholder = "PROMEDIO"
document.body.appendChild(promedio)


/*/ inputs /*/

/*/ botones /*/

const botonCalucular = document.createElement("button")
botonCalucular.innerHTML = "CALCULAR PROMEDIO"
document.body.appendChild(botonCalucular)

const botonAgregar = document.createElement("button")
botonAgregar.innerHTML = "AGREGAR ALUMNO"
document.body.appendChild(botonAgregar)

const botonListar = document.createElement("button")
botonListar.innerHTML = "LISTAR ALUMNOS"
document.body.appendChild(botonListar)

/*/ botones /*/

/*/ eventos /*/

botonCalucular.addEventListener("click", () => {
    calcularProm()
})

botonAgregar.addEventListener("click", () => {
    agregarAlumnos()
})

botonListar.addEventListener("click", () => {
    listarAlumnos()
})

/*/ eventos /*/

/*/ funciones /*/

function calcularProm() {
    let nota1 = Number(document.getElementById("inputNota1").value)
    let nota2 = Number(document.getElementById("inputNota2").value)
    let nota3 = Number(document.getElementById("inputNota3").value)
    var total = (nota1 + nota2 + nota3) / 3

    promedio.value = total.toFixed(2)

    if (nota1 === "" || nota2 === "" || nota3 === "") {
        alert("DEBE LLENAR LOS CAMPOS DE NOTAS")
        return false;
    }

    if (nota1 >= 10 || nota2 >= 10 || nota3 >= 10) {
        alert("LAS NOTAS NO PUEDEN SER MAYORES A 10")
        return false;
    }

    if (total >= 0 && total < 6) {
        console.log("DESAPROBADO")
    }

    if (total >= 6 && total <= 10) {
        console.log("APROBADO")
    }
}

function agregarAlumnos() {
    let id = 1;
    if (alumnos.length > 0) {
        id = alumnos[alumnos.length - 1].id + 1
    }

    let nombre = document.getElementById("inputNombre").value
    let apellido = document.getElementById("inputApellido").value
    let prom = promedio.value
    let alumno = new Alumno(id, nombre, apellido, prom)

    if (nombre === "" || apellido === "") {
        alert("LOS CAMPOS DE NOMBRE Y APELLIDO NO PUEDEN ESTAR VACÍOS")
        return false;
    }


    alumnos.push(alumno)
    console.log(alumnos)
}

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
    tdPromedio.innerHTML = "Promedio";
    encabezado.appendChild(tdPromedio)

    miLista.appendChild(encabezado)

    alumnos.forEach((alumno) => {
        const tr = document.createElement("tr")
        let td = document.createElement("td")
        td.innerHTML = `${alumno.nombre}`
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerHTML = `${alumno.apellido}`
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerHTML = `${alumno.id}`
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerHTML = `${alumno.prom}`
        tr.appendChild(td)

        tr.appendChild(td)
        miLista.appendChild(tr)
    })

    document.body.appendChild(miLista)
}

/*/ funciones /*/