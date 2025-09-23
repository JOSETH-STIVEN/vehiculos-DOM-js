
const contenedor = document.getElementById('Contenedor-tarjetas');
const form = document.getElementById('vehiculo-form');
const btnCarrito = document.getElementById('btn-carrito');
const contenedorCarrito = document.getElementById('cont-carrito');
const carrito = document.querySelector('.cont-productos');
const ValorTotal = document.getElementById('total');
let total = 0;
let resta = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valorFoto = document.getElementById('foto-input').value.trim();
    const valorNombre = document.getElementById('nombre-input').value.trim();
    const valorMarca = document.getElementById('marca-input').value.trim();
    const valorKm = document.getElementById('kilometraje-input').value.trim();
    const valorPrecio = document.getElementById('precio-input').value.trim();
    const valorModelo = document.getElementById('modelo-input').value.trim();

    if (valorFoto === '') {
        valorFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXhZO09qHPZjTjG7cWq3MhtxgulVpuQ7B-w&s';
        alert('Gracias por confiar en nosotros.');
    }

    if (valorNombre === '' || valorMarca === '' || valorModelo === '' || valorKm === '' || valorPrecio === '') {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    const nuevaTarjeta = createVehiculoCard(valorFoto, valorNombre, valorMarca, valorKm, valorPrecio, valorModelo);
    contenedor.appendChild(nuevaTarjeta);
    eventsToVehiculo(nuevaTarjeta);
    form.reset();
});

function createVehiculoCard(url, valorNombre, valorMarca, valorKm, valorPrecio, valorModelo) {
    const fotoFinal = url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXhZO09qHPZjTjG7cWq3MhtxgulVpuQ7B-w&s';

    const col = document.createElement('div');
    col.classList.add('col-md-6', 'item-vehiculo');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');

    const img = document.createElement('img');
    img.classList.add('card-img-top', 'w-100');
    img.setAttribute('src', fotoFinal);

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = valorNombre;

    const h4 = document.createElement('h4');
    h4.classList.add('card-subtitle', 'text-muted');
    h4.textContent = valorMarca;

    const segundoH4 = document.createElement('h4');
    segundoH4.classList.add('card-text');
    segundoH4.textContent = valorModelo;

    const tercerH4 = document.createElement('h4');
    tercerH4.classList.add('card-text');
    tercerH4.textContent = valorKm;

    const h2 = document.createElement('h2');
    h2.classList.add('text-success');
    h2.textContent = valorPrecio;

    const contenedoresBtn = document.createElement('div');
    contenedoresBtn.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const boton1 = document.createElement('button');
    boton1.classList.add('btn', 'btn-success');
    boton1.textContent = 'Comprar';

    const boton2 = document.createElement('button');
    boton2.classList.add('btn', 'btn-danger');
    boton2.textContent = 'Eliminar';

    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cuerpoTarjeta);
    card.appendChild(contenedoresBtn);

    cuerpoTarjeta.appendChild(h3);
    cuerpoTarjeta.appendChild(h4);
    cuerpoTarjeta.appendChild(segundoH4);
    cuerpoTarjeta.appendChild(tercerH4);
    cuerpoTarjeta.appendChild(h2);

    contenedoresBtn.appendChild(boton1);
    contenedoresBtn.appendChild(boton2);

    return col;
}

function eventsToVehiculo(nuevaTarjeta) {
    const deleteBtn = nuevaTarjeta.querySelector('.btn-danger');
    const shopBtn = nuevaTarjeta.querySelector('.btn-success');

    deleteBtn.addEventListener('click', () => {
        nuevaTarjeta.remove();

    });

    shopBtn.addEventListener('click', () => {
        const imgSrc = nuevaTarjeta.querySelector('img').src;
        const nombre = nuevaTarjeta.querySelector('.card-title').textContent;
        const marca = nuevaTarjeta.querySelector('.card-subtitle').textContent;
        const precio = nuevaTarjeta.querySelector('.text-success').textContent;

        const tarjetaCarrito = createProducts(imgSrc, nombre, marca, precio);
        carrito.appendChild(tarjetaCarrito);

        total = total + parseInt(precio);
        ValorTotal.textContent = total;
    });
}

btnCarrito.addEventListener('click', () => {
    contenedorCarrito.classList.toggle('active');
});

function createProducts(imgSrc, nombre, marca, precio) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('product-card');

    const fila = document.createElement('div');
    fila.classList.add('row');

    const col1 = document.createElement('div');
    col1.classList.add('col-md-4');

    const imagen = document.createElement('img');
    imagen.classList.add('card-img');
    imagen.setAttribute('src', imgSrc);

    const col2 = document.createElement('div');
    col2.classList.add('col-md-8');

    const h2 = document.createElement('h2');
    h2.textContent = nombre;

    const h3 = document.createElement('h3');
    h3.textContent = marca;

    const contPrecioBoton = document.createElement('div');
    contPrecioBoton.classList.add('button');

    const h4 = document.createElement('h4');
    h4.textContent = precio;

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn-danger', 'btn');
    btnEliminar.textContent = 'x';

    btnEliminar.addEventListener('click', () => {
        tarjeta.remove();
        const precio = tarjeta.querySelector('h4').textContent;
        total = total - parseInt(precio);
        ValorTotal.textContent = total;
    });

    tarjeta.appendChild(fila);
    fila.appendChild(col1);
    fila.appendChild(col2);
    col1.appendChild(imagen);
    col2.appendChild(h2);
    col2.appendChild(h3);
    col2.appendChild(contPrecioBoton);
    contPrecioBoton.appendChild(h4);
    contPrecioBoton.appendChild(btnEliminar);

    return tarjeta;
}

