class Alumno {
    constructor(id, nombre, apellido, nota1, nota2, promedio) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota1 = nota1
        this.nota2 = nota2
        this.promedio = promedio;
    }
}

const alumnos = [];

mostrarMenu();


function mostrarMenu() {
    let opcion = 0;

    while (opcion !== 4) {
        opcion = Number(prompt(`Seleccione una opción:
                            1. Agregar alumno
                            2. Eliminar alumno
                            3. Buscar alumno
                            4. Salir`));

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
                buscarAlumno();
                break;
            }
            case 4: {
                alert("Sistema cerrado");
                break;
            }
            default: {
                alert("opcion inválida");
                break;
            }

        }

    }
}


/*function agregarAlumno() {
    let nombre = prompt("Ingrese el nombre del alumno");
    let apellido = prompt("Ingrese el apellido del alumno");
    let promedio = mostrarMenuNota()
    let alumno = new Alumno(getId(), nombre, apellido, promedio);
    
    alumnos.push(alumno);

    console.table(alumnos);

    

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

                case 3: {
                    mostrarMenu();
                    break;
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

function eliminarAlumno() {

    const id = Number(prompt("Ingrese el id del que quiere borrar"));

    const alumnoEncontrado = alumnos.some((alumno) => alumno.id === id);

    if (alumnoEncontrado) {
        const soloIds = alumnos.map((alumno) => alumno.id)


        let indice = soloIds.indexOf(id);

        usuarios.splice(indice, 1);
        alert("Alumno borrado");

        console.table(alumnos);


    } else {
        alert("Alumno no encontrado");
    }


}

function buscarAlumno() {
    let idABuscar = Number(prompt("Ingrese el id del usuario:"));

    return usuarios.find((usuario) => idABuscar === usuario.id);
}



promediarNota()

function agregarNota() {

    let nota1 = Number(prompt("Ingrese la nota 1"))
    let nota2 = Number(prompt("Ingrese la nota 2"))
    
    promedio = (nota1 + nota2)/2

    alert ("El promedio es" + promedio)
    

}

function promediarNota(){
    
}

console.log(promedio)*/














function agregarAlumno() {

    let nombre = prompt("Nombre del alumno");
    let apellido = prompt("Apellido del alumno");
    let nota1 = Number(prompt("Primer examen"))
    let nota2 = Number(prompt("Segundo examen"))
    let promedio = (nota1 + nota2) / 2
    let alumno = new Alumno(getId(), nombre, apellido, nota1, nota2, promedio);

    alumnos.push(alumno);

    console.table(alumnos);
}



function getId() {
    if (alumnos.length === 0) {
        return 1;
    } else {
        const ultimo = alumnos[alumnos.length - 1];
        return ultimo.id + 1;
    }
}