class Alumno {
    constructor(id, nombre, apellido, numeroDeRegistro) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.numeroDeRegistro = numeroDeRegistro
    }
}

class Promedio {
    constructor(id, promedio) {
        this.id = id
        this.promedio = promedio
    }
}


const alumnos = []
const promedios = []

/*/ CLASES /*/

function inicializarAplicacion() {
    const titulo = document.createElement("h1")
    titulo.innerText = "Sistema de notas"
    document.body.appendChild(titulo)
}

inicializarAplicacion()

function crearMenu() {
    const listaOpciones = ["Añadir alumno",
        "Listar alumno",
        "Buscar alumno"
    ]

    listaOpciones.forEach((opcion) => {

        const btn = document.createElement("button");
        btn.innerText = opcion;

        switch (opcion) {
            case "Añadir alumno": {
                btn.addEventListener("click",
                    () => {
                        anadirAlumno();
                    })
                break;
            }
            case "Listar Usuarios": {
                btn.addEventListener("click",
                    () => {
                        listarAlumno(alumnos);
                    }
                )
                break;
            }
            case "Buscar Usuario": {
                btn.addEventListener("click",
                    () => {
                        let encontrados = buscarUsuario();
                        listarUsuarios(encontrados);
                        console.table();
                    })
                break;
            }
        }
        document.body.appendChild(btn);
    })
}

function anadirAlumno() {
    let id = 1;
    if (alumnos.length > 0) {
        id = alumnos[alumnos.length - 1].id + 1;
    }

    let nombre = prompt("Ingrese el nombre del alumno");
    let apellido = prompt("Ingrese el nombre del alumno");
    let numeroDeRegistro = Number(prompt("Ingrese el número de registro del alumno"))
    let alumno = new Alumno(id, nombre, apellido, numeroDeRegistro);

    alumnos.push(alumno);
    console.table(alumnos);
    listarAlumnos(alumnos);
}

crearMenu()


function listarAlumnos(miListaDeUsuarios) {
    let miLista = document.querySelector("#listaAlumnos");
    if (!miLista) {
        miLista = document.createElement("table");
        miLista.setAttribute("id", "listaUsuarios");
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

    miListaDeUsuarios.forEach((alumno, promedio) => {
        const nodotr = document.createElement("tr")

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
        nodotd.innerHTML = `${promedio.promedios}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `<button id=${promedio.id}>Borrar</button> | Editar`

        nodotr.appendChild(nodotd);
        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista)
    programarEventos();
}

function programarEventos() {
    alumnos.forEach((element) => {
        const btn = document.getElementById(element.id);
        btn.addEventListener("click", () => agregarNota());
    })
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
    let promedio = new Promedio(getId2(), div, numeroDeRegistro)

    promedios.push(promedio)
    console.log("PROMEDIOS")
    console.table(promedios)

    alert("EL PROMEDIO DEL ALUMNO ES " + div)
}