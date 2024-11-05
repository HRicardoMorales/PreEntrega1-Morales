

// Funciones
function opcionValida(opcionMenu) {
    // Verifica si la opción es un número válido en el rango permitido
    while (isNaN(opcionMenu) || opcionMenu < 0 || opcionMenu > 3) {
        alert("OPCIÓN INVÁLIDA");
        opcionMenu = parseInt(prompt("Ingrese la opción: " + opcionesMenu));
    }

    if (opcionMenu === 0) {
        alert("Gracias por usar nuestro sistema.");
        return false; // Para salir del programa
    }

    return true;
}

function agregarItem() {
    const tipo = prompt("¿Es un Producto o un Servicio? (Ingrese 'producto' o 'servicio')").toLowerCase();
    
    if (tipo !== "producto" && tipo !== "servicio") {
        alert("Tipo inválido. Intente de nuevo.");
        return; // Sale de la función si el tipo es inválido
    }

    const nombre = prompt("Ingrese el nombre del " + tipo);
    const precio = parseFloat(prompt("Ingrese el precio del " + tipo));

    // Valida que el precio ingresado sea un número positivo
    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido. Debe ser un número mayor a 0.");
        return;
    }

    // Agregar a la lista con separación de coma si ya existen nombres
    if (nombresItems !== "") {
        nombresItems += ", ";
    }

    // Concatenamos el nombre y actualizamos el total según el precio
    nombresItems += nombre;
    total += precio;

    alert(tipo.charAt(0).toUpperCase() + tipo.slice(1) + " '" + nombre + "' agregado con éxito!");
}

function listarItems() {
    alert("Items seleccionados: " + nombresItems);
}

function mostrarTotal() {
    alert("Total: $" + total.toFixed(2));
}

// Inicio del programa
const opcionesMenu = "1- Agregar producto/servicio, 2- Listar items, 3- Mostrar total, 0- Salir";
let opcion = parseInt(prompt("Ingrese la opción: " + opcionesMenu));

let nombresItems = "";
let total = 0;

while (opcionValida(opcion)) {
    switch (opcion) {
        case 1:
            agregarItem();
            break;

        case 2:
            listarItems();
            break;

        case 3:
            mostrarTotal();
            break;
    }

    // Solicita nuevamente la opción al usuario
    opcion = parseInt(prompt("Ingrese la opción: " + opcionesMenu));
}
