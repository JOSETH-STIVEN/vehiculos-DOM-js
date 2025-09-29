const tablaBody = document.querySelector('#tablaProductos tbody');

document.addEventListener('DOMContentLoaded', () => {
    const vehiculosGuardadosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    vehiculosGuardadosEnCarrito.forEach(vehiculo => {
        const fila = document.createElement('tr');


        const tdImagen = document.createElement('td');
        tdImagen.textContent = vehiculo.foto;

        const tdNombre = document.createElement("td");
        tdNombre.textContent = vehiculo.nombre;

        const tdMarca = document.createElement("td");
        tdMarca.textContent = vehiculo.marca;

        const tdModelo = document.createElement("td");
        tdModelo.textContent = vehiculo.modelo;

        const tdKm = document.createElement("td");
        tdKm.textContent = vehiculo.kilometraje;

        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = vehiculo.precio;


        fila.appendChild(tdImagen);
        fila.appendChild(tdNombre);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo);
        fila.appendChild(tdKm);
        fila.appendChild(tdPrecio);


        tablaBody.appendChild(fila);
    })
})