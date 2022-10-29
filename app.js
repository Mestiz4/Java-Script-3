const shopItems = document.getElementById("shop-items")
const cartItems = document.getElementById("cart-items")
const modalContainer = document.getElementById("container content-section")

//cada producto como objeto
const productos = [
    {
        nombre: "Cien Años de Soledad",
        precio: 50000,
        img: "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg",
    },
    {
        nombre: "1984",
        precio: 30000,
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/c9/ee/c9eef0bafc045010bfc431812ea5bbf8.jpg",
    },
    {
        nombre: "Un Mundo Feliz",
        precio: 30000,
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/4d/4f/4d4fa8bd3eaf0296c64927555fe9228f.jpg"
    },
    {
        nombre: "El Principito",
        precio: 25000,
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/f4/bc/f4bc25288107cfebe6a9cbc1e245c00a.jpg",
    },
    {
        nombre: "Inferno",
        precio: 50000,
        img: "https://www.tornamesa.co/imagenes/9789584/978958425297.GIF",
    },
    {
        nombre: "El Código Da Vinci",
        precio: 50000,
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/d2/74/d2745514f8ea4de663d5c8c659a162b2.jpg",
    }
];

//declaración del carrito
let carrito = [];

//detalle de los productos
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "shop-item";
    content.innerHTML = `
    <img class="shop-item-image" src="${product.img}">
    <span class="shop-item-title">${product.nombre}</span>
    <span class="shop-item-price">$ ${product.precio} COP</span>
    `;

    shopItems.append(content);

//botón para añadir al carrito
    let añadirAlCarrito = document.createElement("button");
    añadirAlCarrito.innerText ="AÑADIR AL CARRITO";
    añadirAlCarrito.className = "btn btn-primary shop-item-button";
    
    content.append(añadirAlCarrito);

    añadirAlCarrito.addEventListener("click", () => {
        carrito.push(
            {
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: 1,
            });
            refreshCarrito();
    })
});


//Modificar cantidad
function actualizarCantidad(index, cantidad){
    console.log("Actualizando carrito",carrito[index], cantidad)
    carrito[index].cantidad=cantidad
    refreshCarrito()
};

//remover producto
function eliminarProducto(index){
    console.log("Antes de eliminar", carrito);
    carrito.splice(index,1);
    console.log("despues de eliminar:", carrito)
    refreshCarrito();
};

//mostrar carrito
function refreshCarrito(){
    
    console.log("refreshCarrito",carrito)
    let cart= document.getElementById("cart-items")
    let total=0

    cart.innerHTML='';
    carrito.forEach((product, index)=>{
        
    cart.innerHTML += `
    <div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${product.img}">
        <span class="cart-item-title">${product.nombre}</span>
    </div>
    <span class="cart-price cart-column">${product.precio}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" onchange="actualizarCantidad(${index}, event.target.value)" min="1" type="number" value="${product.cantidad}">
        <button class="btn btn-danger" onclick="eliminarProducto(${index})" type="button">ELIMINAR</button>
    </div>
</div>`;
    
        total+= product.precio * product.cantidad;
    }) 
    document.getElementById("cart-total-price").innerText=`$${total}`;
};


