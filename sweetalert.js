//Botón comprar
let comprar = document.querySelector("#btn1");

comprar.addEventListener('click', mostrar);

function mostrar(){
    Swal.fire('Gracias por tu compra', '', 'success');
};