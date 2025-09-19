const { createElement } = require("react");

const contenedor =document.getElementById('contenedor-tarjetas');

const form = document.getElementById('form-vehiculo');
form.addEventListener('submit', (e) => {
    const valorFoto = document.getElementById('foto-input').value;
    const valorNombre = document.getElementById('nombre-inpu').value;
    const valorMarca = document.getElementById('marca-input').value;
    const valorKm = document.getElementById('kilometraje-input').value;
    const valorPrecio = document.getElementById('precio-input').value;
    const valorModelo = document.getElementById('modelo-input').value;
    if (valorFoto && valorNombre && valorMarca && valorModelo && valorKm && valorPrecio == "") {
        alert("Por favor es obligatorio llenar todos los campos que estan en la interfaz")
    }else{

    }

    

});

function createVehiculoCard(){
    const col = createElement('div');
    col.classList.add('col-md-6', 'item-vehiculo');

    const card = createElement('div');
    card.classList.add('card', 'h-100');

    const img = createElement('img');
    img.classList.add('card-img-top', 'w-100');
    img.setAttribute('alt', 'foto-vehiculo');

    const cuerpoTarjeta = createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    const h3 = createElement('h3');
    h3.classList.add('card-title');

    const h4 = createElement('h4');
    h4.classList.add('card-sibtitle', 'text-muted');

    const segundoH4 = createElement('h4');
    segundoH4.classList.add('card-text');

    const tercerH4 = createElement('h4');
    tercerH4.classList.add('card-text');

    const h2 = createElement('h2');
    h2.classList.add('text-succes');

    const contenedoresBtn = createElement('div');
    contenedoresBtn.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const boton1 = createElement('button');
    boton1.classList.add('btn', 'btn-succes');

    const boton2 = createElement('button');
    boton2.classList.add('btn', 'btn-danger');
};