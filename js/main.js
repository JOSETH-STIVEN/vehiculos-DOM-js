

const contenedor = document.getElementById('Contenedor-tarjetas');

const form = document.getElementById('vehiculo-form');


const addBtn = document.getElementById('agregar-vehiculo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura de valores
    let valorFoto = document.getElementById('foto-input').value.trim();
    const valorNombre = document.getElementById('nombre-input').value.trim();
    const valorMarca = document.getElementById('marca-input').value.trim();
    const valorKm = document.getElementById('kilometraje-input').value.trim();
    const valorPrecio = document.getElementById('precio-input').value.trim();
    const valorModelo = document.getElementById('modelo-input').value.trim();

    // Imagen por defecto
    if (valorFoto === '') {
        valorFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXhZO09qHPZjTjG7cWq3MhtxgulVpuQ7B-w&s';
    }

    // Validación
    if (valorNombre === '' || valorMarca === '' || valorModelo === '' || valorKm === '' || valorPrecio === '') {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Crear tarjeta y agregarla
    const nuevaTarjeta = createVehiculoCard(valorFoto, valorNombre, valorMarca, valorKm, valorPrecio, valorModelo);
    contenedor.appendChild(nuevaTarjeta);
    eventsToVehiculo(nuevaTarjeta);
    form.reset();
});


function createVehiculoCard(url, valorNombre, valorMarca, valorKm, valorPrecio, valorModelo) {

    const fotoFinal= url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXhZO09qHPZjTjG7cWq3MhtxgulVpuQ7B-w&s';

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
    h4.classList.add('card-sibtitle', 'text-muted');
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
};


function addVehiculoCard(event) {
    addBtn.addEventListener('click', () => {
        const valorFoto = document.getElementById('foto-input').value;
        const valorNombre = document.getElementById('nombre-input').value;
        const valorMarca = document.getElementById('marca-input').value;
        const valorKm = document.getElementById('kilometraje-input').value;
        const valorPrecio = document.getElementById('precio-input').value;
        const valorModelo = document.getElementById('modelo-input').value;

        if (valorNombre == "" || valorMarca == "" || valorModelo == "" || valorKm == "" || valorPrecio == "") {
            alert("Por favor es obligatorio llenar todos los campos que estan en la interfaz")
        } else {
            const nuevaTrajeta = createVehiculoCard(valorFoto, valorNombre, valorMarca, valorKm, valorPrecio, valorModelo);
            contenedor.appendChild(nuevaTrajeta);

            eventsToVehiculo(nuevaTrajeta)

            form.reset();
        }
    });
}
addVehiculoCard();


function eventsToVehiculo(nuevaTrajeta) {
    const deleteBtn = nuevaTrajeta.querySelector('.btn-danger');

    deleteBtn.addEventListener('click', () => {
        nuevaTrajeta.remove();
    });

    const shopBtn = nuevaTrajeta.querySelector('.btn-success');
    shopBtn.addEventListener('click', () =>{
        alert('Haz comprado nuestro vehiculo');
    });
};

