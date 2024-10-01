// Variables para almacenar el total de los pedidos y los contadores
let total = 0;
let pizzas = 0;
let adicionales = 0;
let acompanantes = 0;

// Función para añadir un producto al carrito
function addToCart(price, category) {
    total += price;

    // Actualiza los contadores de acuerdo a la categoría
    if (category === 'pizzas') {
        pizzas++;
        document.getElementById('pizzas').textContent = pizzas;
    } else if (category === 'adicionales') {
        adicionales++;
        document.getElementById('adicionales').textContent = adicionales;
    } else if (category === 'acompanantes') {
        acompanantes++;
        document.getElementById('acompanantes').textContent = acompanantes;
    }

    // Actualiza el total mostrado
    document.getElementById('total').textContent = `$ ${total.toFixed(3)}`;
}

// Añadir event listeners a los botones de "Añadir"
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // Obtener el precio del producto (eliminar el símbolo de moneda y convertir a número)
        const price = parseFloat(this.previousElementSibling.textContent.replace('$', '').replace(',', ''));

        // Determinar la categoría del producto basado en el contenido
        const card = this.closest('.card');
        const parentId = card.parentElement.parentElement.parentElement.id;
        let category = '';

        // Asignar la categoría correcta
        if (parentId === 'collapseOne') {
            category = 'pizzas';
        } else if (parentId === 'collapseTwo') {
            category = 'adicionales';
        } else if (parentId === 'collapseThree') {
            category = 'acompanantes';
        }

        // Añadir el producto al carrito
        addToCart(price, category);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let total = 0;

    document.querySelectorAll(".btn.btn-primary").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const priceText = this.parentElement.querySelector('h3').textContent;
            const price = parseInt(priceText.replace(/[^0-9]/g, '')); // Extrae el número del precio
            total += price;

            document.getElementById("total").textContent = `$ ${total.toLocaleString()}`;
        });
    });
});