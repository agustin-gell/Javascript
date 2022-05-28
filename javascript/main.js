const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    const anoNacimiento = parseInt(String(fechaNacimiento));
    const mesNacimiento = parseInt(String(fechaNacimiento));
    const diaNacimiento = parseInt(String(fechaNacimiento));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad = edad - 1;
    }
    else if (mesActual === mesNacimiento) {
        
        if (diaActual < diaNacimiento) {
            edad = edad - 1;
        }
    }
    return edad;
};

window.addEventListener('load', function () {

    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            edad.innerText = `La edad es ${calcularEdad(this.value)} años`;
        }
    });

});