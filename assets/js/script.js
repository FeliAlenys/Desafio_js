// Definir el precio base del producto
const precio = 400000

// Selecionar los elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

// Establecer el precio inicial en el HTML
precioSpan.innerHTML = precio;

// Variables para manejar la cantidad
let cantidad = 0;

// Función para actualizar el total a pagar
function actualizarTotal() {
    const total = cantidad * precio;
    totalSpan.innerHTML = total;
}

// Evento para incrementar la cantidad
document.getElementById("btn-incrementar").onclick = function() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

// Evento para decrementar la cantidad
document.getElementById("btn-decrementar").onclick = function() {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
}