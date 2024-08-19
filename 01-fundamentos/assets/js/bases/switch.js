const dia = 0; // 0: Domingo

/**
 * Si vamos a utilizar if para validar con un ===, será menos complicado y más legible utilizar switch.
 */

switch (dia) {
    case 0:
        console.log("Domingo");
        break; // El break se utiliza para salir del switch después de que se ha ejecutado un bloque de código.
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Día inválido");
        break;
}

/** El switch realiza una evalucación con el === (como en el if), por ende valida tanto el valor como el tipo de dato*/


 