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

/*/ botones /*/

const botonAgregar = document.getElementById("botonAgregar")
botonAgregar.addEventListener("click", () => {
    agregarAlumnos()
})

const botonListar = document.getElementById("botonListar")
botonListar.addEventListener("click", () => {
    listarAlumnos()
})


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

var estado = 0

    if (total >= 0 && total < 6) {
        estado = "DESAPROBADO"
    }

    if (total >= 6 && total <= 10) {
        estado = "APROBADO"
    }

    let id = 1;
    if (alumnos.length > 0) {
        id = alumnos[alumnos.length - 1].id + 1;
    }

    let nombre = document.getElementById("inputNombre").value
    let apellido = document.getElementById("inputApellido").value
    let prom = promedio.value
    let est = estado
    let alumno = new Alumno(id, nombre, apellido, prom, est)

    if (nombre === "" || apellido === "") {
        alert("LOS CAMPOS DE NOMBRE Y APELLIDO NO PUEDEN ESTAR VACÍOS");
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

    const tdAcciones = document.createElement("th")
    tdAcciones.innerHTML = "Estado";
    encabezado.appendChild(tdAcciones);
    
    const tdEstado = document.createElement("th")
    tdEstado.innerHTML = "Acciones";
    encabezado.appendChild(tdEstado);

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
        nodotd.innerHTML = `${alumno.est}`
        nodotr.appendChild(nodotd)            

        nodotd = document.createElement("td");
        nodotd.innerHTML = `<button id=${alumno.id}>Borrar</button>`

        nodotr.appendChild(nodotd);
        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista)
}


/*/function listarAlumnos() {
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
        nodotd.innerHTML = `${alumno.est}`;
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td");
        nodotd.innerHTML = `<button id=${alumno.id}>Borrar</button>`

        document.body.appendChild(nodotd);
        document.body.appendChild(nodotr);
    });

}/*/

/*/ function programarEventos() {
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

} /*/