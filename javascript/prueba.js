class Usuario{
    constructor(id,nombre,apellido, cumple)
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cumple=cumple;
    }
}

/*
    Inicializa la aplicación
    Agrega H1 
    Agrega Subtítulo
*/
function inicializarAplicacion() {
    crearTitulo();
    crearMenu();


}

function crearTitulo() {
    const miTitulo = document.createElement("h1");
    miTitulo.innerText = "Sistema de Gestión de Usuarios";
    document.body.appendChild(miTitulo);
}
function crearMenu() {
    const listaOpciones = ["Listar Usuarios",
        "Agregar Usuario",
        "Buscar Usuario"
    ];


    listaOpciones.forEach((opcion) => {

        const btn = document.createElement("button");
        btn.innerText = opcion;

        switch (opcion) {
            case "Listar Usuarios":
                {
                    btn.addEventListener("click",
                        () => {
                            listarUsuarios(usuarios);
                        }
                    )
                    break;
                }
            case "Agregar Usuario":
                {
                    btn.addEventListener("click",
                        () => {
                            agregarUsuario();
                        })
                    break;
                }
            case "Buscar Usuario":
                    {
                        btn.addEventListener("click",
                            () => {
                              let encontrados =  buscarUsuario();
                              listarUsuarios(encontrados);
                              console.table();
                            })
                        break;
                    }
        }



        document.body.appendChild(btn);

    })



}
/*
    Muestra el listado de usuarios del sistema
*/
function listarUsuarios(miListaDeUsuarios) {
    let miLista = document.querySelector("#listaUsuarios");
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

    const tdCumpleanos = document.createElement("th");
    tdCumpleanos.innerHTML = "Cumpleaños:";
    encabezado.appendChild(tdCumpleanos);

    const tdAcciones = document.createElement("th");
    tdAcciones.innerHTML = "Acciones";
    encabezado.appendChild(tdAcciones);

    miLista.appendChild(encabezado)

    miListaDeUsuarios.forEach((usuario) => {
        const nodotr = document.createElement("tr");
        let nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.nombre}`;
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.apellido}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `No reporta`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `<button id=${usuario.id}>Borrar</button> | Editar`;
        
        nodotr.appendChild(nodotd);
        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista);
    programarEventos();
}

function programarEventos()
{
    usuarios.forEach((element)=>{
        const btn = document.getElementById(element.id);
        btn.addEventListener("click", ()=>eliminarUsuario());
    })
}

function agregarUsuario() {
    let id = 1;
    if (usuarios.length > 0) {
        id = usuarios[usuarios.length - 1].id + 1;
    }

    let nombre = prompt("ingrese un nombre");
    let apellido = prompt("ingrese un apellido");
    let usuario = new Usuario(id, nombre, apellido);

    usuarios.push(usuario);
    console.table(usuarios);
    listarUsuarios(usuarios);
}

function buscarUsuario() {
    let paramBusqueda = prompt("Ingresa el nombre que quieres buscar");

    let encontrados = usuarios.filter((usuario) =>
     usuario.nombre.toLowerCase().indexOf(paramBusqueda.toLocaleLowerCase()) !== -1 || 
     usuario.apellido.toLowerCase().indexOf(paramBusqueda.toLocaleLowerCase()) !== -1);
    
    return encontrados;

}


function eliminarUsuario(){

    let id= Number(prompt("Ingrese el id del usuario que quiere eliminar"));
 
    let encontrado = usuarios.find((usuario)=>usuario.id===id);
 
   if(!encontrado)
   {
       alert("Usuario no Encontrado");
   }
   else{
 
        let index = usuarios.indexOf(encontrado);
 
        usuarios.splice(index,1);
 
        console.log("Borrar usuario");
        console.log(usuarios);
 
   }
    
 
 }

 // Haga un sistema CRUD para administrar usuarios. 
// Un usuario debe tener un id, nombre y apellido. 
// El sistema debe permitir: 
// Agregar un usuario
// Eliminar un usuario dado su id
// Buscar un usuario, dado su nombre 
// Editar el nombre y apellido de un usuario, dado su id

 // Mostar un menu
 // Ingresar Datos 
 // Pedir id del que quiere eliminar
 // Pedir el nombre del que quiere buscar
 // Pedir el ide dl que quiere modificat
 // Crear clase usuario 
 


 const usuario1 = new Usuario(1, "Natalia", "Chiara");
 const usuario2 = new Usuario(2, "Diego", "Del Hoyo");
 const usuario3 = new Usuario(3, "Alejandro", "Lombardi");
 const usuario4 = new Usuario(4, "Diego", "Castro");
 const usuario5 = new Usuario(5, "Gabriel", "Odirozola");
 const usuario6 = new Usuario(6, "Juan", "Ferrari");

const usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6];
console.log("INICIAL:", usuarios);

inicializarAplicacion();
//mostrarMenu();


function mostrarMenu()
{
   let opcion = 0;
   
   while(opcion!==10)
   {
       opcion = Number( prompt(`Seleccione una acción:
                           1. Agregar Usuario 
                           2. Eliminar Usuario
                           3. Modificar Usuario
                           4. Listar usuarios
                           5. Buscar Usuario
                           6. Listar NOMBRE + APELLIDO
                           10. Salir`));

   switch(opcion)
   {
       case 1:
       {
           agregarUsuario();
           break;
       }
       case 2: 
       {
           eliminarUsuario();
       }
       case 3: 
       {
           modificarUsuario();
       }
       case 4:
       {
           listarUsuarios();
           break;
       }
       case 5:
       {
               buscarUsuario();
               break;
       }
       case 6:
       {
               listarNombreMasApellido();
               break;
       }
       default:{
           alert("opcion inválida");
           break;
       }
      
   }

   }
}









function modificarUsuario()
{
   let id= Number(prompt("Ingrese el id del usuario que quiere modificar"));

   let existe = usuarios.some((usuario)=>usuario.id===id);

   if(existe)
   {
       let encontrado = usuarios.find((usuario)=>usuario.id===id);
       let nuevoNombre = prompt("Ingrese el nuevo nombre");
       let nuevoApellido = prompt("Ingrese el nuevo apellido");

       encontrado.nombre = nuevoNombre;
       encontrado.apellido= nuevoApellido;

       console.log("MODIFICACION")
       console.log(usuarios);
   }
   else
   {
       alert("Usuario no econtrado")
   }

}


function listarNombreMasApellido()
{
   let nombresYApellidos = usuarios.map(
       (usuario)=>usuario.apellido+ " " + usuario.nombre);

   console.log("MAP:");
   console.log(nombresYApellidos);

}

