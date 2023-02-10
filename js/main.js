// Vamos a crear un carrito de compras para una herboristeria //

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const carrito = [];

const agregarProducto = (producto) => {
  carrito.push(producto);
};

const calcularTotal = () => {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio;
  }
  return total;
};

// AQUI VAMOS A DESIGNAR LOS PRODUCTOS //

const teVerde = new Producto("Te verde", 450);
const teRojo = new Producto("Te rojo", 420);
const arrozKoshihikari = new Producto("Arroz Koshihikari", 300);
const algasNori = new Producto("Algas Nori x100", 1200);
const hierbaMenta = new Producto("Hierba de menta x100gr", 250);
const hierbaCedron = new Producto("Hierba de cedronx100gr", 300);

// COMIENZO DEL PROGRAMA //

alert("¡Bienvenido a la Herboristeria Andante! ¿Qué desea comprar hoy?");

let seguirComprando = true;

while (seguirComprando && seguirComprando != 7) {
  const productoElegido = prompt(
    "Elija un producto a agregar al carrito: \n 1. Te verde \n 2. Te Rojo \n 3. Arroz Koshihikari \n 4. Algas Nori x 100 unidades \n 5. Hierba de menta por 100 gramos \n 6. Hierba de cedron por 100 gramos \n 7. Finalizar compra"
  );

  switch (productoElegido) {
    case "1":
      agregarProducto(teVerde);
      alert(
        `Usted seleccionó el producto ${teVerde.nombre} con un precio de ${teVerde.precio} pesos argentinos.`
      );
      console.log(
        `producto seleccionado ${teVerde.nombre} precio: ${teVerde.precio} pesos argentinos.`
      );
      break;
    case "2":
      agregarProducto(teRojo);
      alert(
        `Usted seleccionó el producto ${teRojo.nombre} con un precio de ${teRojo.precio} pesos argentinos.`
      );
      console.log(
        `producto seleccionado ${teRojo.nombre} precio: ${teRojo.precio} pesos argentinos.`
      );
      break;
    case "3":
      agregarProducto(arrozKoshihikari);
      alert(
        `Usted seleccionó el producto ${arrozKoshihikari.nombre} con un precio de ${arrozKoshihikari.precio} pesos argentinos.`
      );
      console.log(
        `producto seleccionado ${arrozKoshihikari.nombre} precio: ${arrozKoshihikari.precio} pesos argentinos.`
      );
      break;
    case "4":
      agregarProducto(algasNori);
      alert(
        `Usted seleccionó el producto ${algasNori.nombre} con un precio de ${algasNori.precio} pesos argentinos.`
      );
      console.log(
        `producto seleccionado ${algasNori.nombre} precio: ${algasNori.precio} pesos argentinos.`
      );
      break;
    case "5":
      agregarProducto(hierbaMenta);
      alert(
        `Usted seleccionó el producto ${hierbaMenta.nombre} con un precio de ${hierbaMenta.precio} pesos argentinos.`
      );
      console.log(
        `producto seleccionado ${hierbaMenta.nombre} precio: ${hierbaMenta.precio} pesos argentinos.`
      );
      break;
    case "6":
      agregarProducto(hierbaCedron);
      alert(
        `Usted seleccionó el producto ${hierbaCedron.nombre} con un precio de ${hierbaCedron.precio} pesos argentinos.`
      );
      console.log(
        `producto seleccionado ${hierbaCedron.nombre} precio: ${hierbaCedron.precio} pesos argentinos.`
      );
      break;
    case "7":
      seguirComprando = false;
      alert("Gracias por su compra, lo esperamos nuevamente!");
      break;
    default:
      alert("Por favor, elija una opción válida");
  }
}

// AQUI EL TOTAL DE LA COMPRA REALIZADA //

let total = 0;
for (let producto of carrito) {
  total += producto.precio;
  console.log(producto.nombre + " - Precio: S/." + producto.precio);
}

console.log("Total a pagar: S/." + total);
