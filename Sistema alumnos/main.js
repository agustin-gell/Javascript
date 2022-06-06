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

const estado = document.createElement("input")
estado.type = "text"
estado.id = "promedio"
estado.placeholder = "ESTADO"
document.body.appendChild(estado)

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

const botonBuscar = document.createElement("button")
botonBuscar.innerHTML = "BUSCAR ALUMNOS"
document.body.appendChild(botonBuscar)

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

botonBuscar.addEventListener("click", () => {
    let encontrados = buscarUsuario();
    listarAlumnos(encontrados);
})

/*/ eventos /*/

function calcularProm() {
    let nota1 = Number(document.getElementById("inputNota1").value)
    let nota2 = Number(document.getElementById("inputNota2").value)
    let nota3 = Number(document.getElementById("inputNota3").value)
    var total = (nota1 + nota2 + nota3) / 3

    promedio.value = total.toFixed(2)

    if (nota1 === "" || nota2 === "" || nota3 === "") {
        alert("DEBE LLENAR LOS CAMPOS DE NOTAS");
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
        id = alumnos[alumnos.length - 1].id + 1;
    }

    let nombre = document.getElementById("inputNombre").value
    let apellido = document.getElementById("inputApellido").value
    let prom = promedio.value
    let alumno = new Alumno(id, nombre, apellido, prom)

    if (nombre === "" || apellido === "") {
        alert("LOS CAMPOS DE NOMBRE Y APELLIDO NO PUEDEN ESTAR VACÍOS", );
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

    const tdEstado = document.createElement("th")
    tdEstado.innerHTML = "Estado";
    encabezado.appendChild(tdEstado);

    const tdAcciones = document.createElement("th")
    tdAcciones.innerHTML = "Acciones";
    encabezado.appendChild(tdAcciones);

    miLista.appendChild(encabezado)

    alumnos.forEach((alumno) => {
        const nodotr = document.createElement("tr");
        let nodotd = document.createElement("td");
        nodotd.innerHTML = `${alumno.nombre}`;
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${alumno.apellido}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${alumno.id}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${alumno.prom}`;
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${alumno.prom}`;
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td");
        nodotd.innerHTML = `<button id=${alumno.id}>Borrar</button>`

        nodotr.appendChild(nodotd);
        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista)
    programarEventos()
}

function programarEventos() {
    alumnos.forEach((element) => {
        const botonBorrar = document.getElementById(element.id);
        botonBorrar.addEventListener("click", () => eliminarUsuario());
    })
}

function eliminarUsuario() {

    let id = Number(prompt("Ingrese el id del usuario que quiere eliminar"));

    let encontrado = alumnos.find((alumno) => alumno.id === id);

    if (!encontrado) {
        alert("USUARIO NO ENCONTRADO");
    } else {

        let index = alumnos.indexOf(encontrado);

        alumnos.splice(index, 1);

        console.log("Borrar usuario");
        console.log(alumnos);

    }
}

function buscarUsuario() {
    let paramBusqueda = prompt("Ingresa el nombre que quieres buscar");

    let encontrados = alumnos.filter((alumno) =>
        alumno.nombre.toLowerCase().indexOf(paramBusqueda.toLowerCase()) !== -1 ||
        alumno.apellido.toLowerCase().indexOf(paramBusqueda.toLowerCase()) !== -1);

    return encontrados;

}