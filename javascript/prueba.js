class Alumno {
    constructor(id, nombre, apellido, numeroDeRegistro, prom) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.numeroDeRegistro = numeroDeRegistro
        this.prom = prom
    }
}

const alumnos = []

/*/ inputs /*/

const inputNombre = document.createElement("input")
inputNombre.type = "text"
inputNombre.id = "inputNombre"
inputNombre.innerHTML = "Nota 1"
document.body.appendChild(inputNombre)

const inputApellido = document.createElement("input")
inputApellido.type = "text"
inputApellido.id = "inputApellido"
inputApellido.innerHTML = "Nota 1"
document.body.appendChild(inputApellido)

const inputNumeroDeRegistro = document.createElement("input")
inputNumeroDeRegistro.type = "text"
inputNumeroDeRegistro.id = "inputNumeroDeRegistro"
inputNumeroDeRegistro.innerHTML = "Nota 1"
document.body.appendChild(inputNumeroDeRegistro)

const inputNota1 = document.createElement("input")
inputNota1.type = "number"
inputNota1.id = "inputNota1"
inputNota1.innerHTML = "Nota 1"
document.body.appendChild(inputNota1)

const inputNota2 = document.createElement("input")
inputNota2.type = "number"
inputNota2.id = "inputNota2"
inputNota2.placeholder = "Nota 2"
document.body.appendChild(inputNota2)

const inputNota3 = document.createElement("input")
inputNota3.type = "number"
inputNota3.id = "inputNota3"
document.body.appendChild(inputNota3)

const promedio = document.createElement("input")
promedio.type = "number"
promedio.id = "promedio"
document.body.appendChild(promedio)

/*/ inputs /*/

/*/ botones /*/

const botonCalucular = document.createElement("button")
botonCalucular.innerHTML = "CALCULAR"
document.body.appendChild(botonCalucular)

const botonAgregar = document.createElement("button")
botonAgregar.innerHTML = "AGREGAR"
document.body.appendChild(botonAgregar)

/*/ botones /*/

/*/ eventos /*/

botonCalucular.addEventListener("click", () => {
    calcularProm();
})

botonAgregar.addEventListener("click", () => {
    agregarAlumnos();
})

/*/ eventos /*/



function calcularProm() {
    let nota1 = Number(document.getElementById("inputNota1").value)
    let nota2 = Number(document.getElementById("inputNota2").value)
    let nota3 = Number(document.getElementById("inputNota3").value)
    let total = (nota1 + nota2 + nota3) / 3

    promedio.value = total
}

function agregarAlumnos() {
    let id = 1;
    if (alumnos.length > 0) {
        id = alumnos[alumnos.length - 1].id + 1;
    }

    let nombre = document.getElementById("inputNombre").value
    let apellido = document.getElementById("inputApellido").value
    let numeroDeRegistro = document.getElementById("inputNumeroDeRegistro").value
    let prom = promedio.value
    let alumno = new Alumno(id, nombre, apellido, numeroDeRegistro, prom)

    alumnos.push(alumno)
    console.log(alumnos)



    let miLista = document.querySelector("#listaAlumnos");
    if (!miLista) {
        miLista = document.createElement("table");
        miLista.setAttribute("id", "listaAlumnos");
    }
    miLista.innerHTML = "";

    const encabezado = document.createElement("tr");

    const tdNombre = document.createElement("th");
    tdNombre.innerHTML = "Nombre";
    encabezado.appendChild(tdNombre);

    const tdApellido = document.createElement("th");
    tdApellido.innerHTML = "Apellido";
    encabezado.appendChild(tdApellido);

    const tdNumeroDeRegistro = document.createElement("th");
    tdNumeroDeRegistro.innerHTML = "Número de registro";
    encabezado.appendChild(tdNumeroDeRegistro);

    const tdPromedio = document.createElement("th");
    tdPromedio.innerHTML = "Promedio";
    encabezado.appendChild(tdPromedio);

    const tdAcciones = document.createElement("th");
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
        nodotd.innerHTML = `${alumno.numeroDeRegistro}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${alumno.prom}`;
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td");
        nodotd.innerHTML = `<button id=${alumno.id}>Borrar</button> | Editar`

        nodotr.appendChild(nodotd);
        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista)
    programarEventos()
}