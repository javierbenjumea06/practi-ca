let productos = [
  { id: "1", nombre: "Camisa", precio: 50000, stock: 10 },
  { id: "2", nombre: "Pantalón", precio: 80000, stock: 5 },
  { id: "3", nombre: "Zapatos", precio: 120000, stock: 1 }
];

const agregarProducto = (lista) => {
const nuevoProducto = {
    id: null,
    nombre: null,
    precio: null,
    stock: null
};
nuevoProducto.nombre = prompt("Escribe aquí el nombre del producto: ");
nuevoProducto.precio = prompt("Escribe aquí el precio del producto: ");
nuevoProducto.stock = prompt("¿Cuanto stock hay del producto?: ");
nuevoProducto.id = "PR" + productos.length;
lista.push(nuevoProducto);
console.log("Producto añadido exitosamente")
};

const listarProductos = (lista) => {
    console.log("LISTA DE PRODUCTOS: ")
    lista.forEach((producto, indice) => {
        console.log(`PRODUCTO #${indice+1}. \nNombre: ${producto.nombre} . \nID: ${producto.id}. \nPrecio: ${producto.precio}. \nStock: ${producto.stock}.`)
    });

};

const reporteStockBajo = (lista) => {
    console.log("Alerta, los siguientes productos tienen stock bajo: ");
    console.log(lista.filter((producto) => {
        producto.stock <= 2
    }))
};
        
while(true) {
    const menu = prompt("ELIGE UNA DE LAS FUNCIONES DEL MENÚ: \n1. Agregar producto. \n2. Listar productos. \n3. Ver stock bajo. \n4. Salir.")

    if (menu == 1) {
        agregarProducto(productos)
    } else if (menu == 2) {
        listarProductos(productos)
    } else if (menu == 3) {
        reporteStockBajo(productos)
    } else if (menu == 4) {
        console.log("Decidiste salir.")
        break
    } else {
        console.log("Escribiste algo invalido.")
    }
}
console.log("La tuya que se me abre")

/*
Casos de uso (lo que el sistema debe poder hacer)

Agregar producto: Recibe nombre, precio y stock inicial. Genera un id único usando el  indice, ejemplo: 0,1,2,3,4, 5...
Listar productos: Mostrar id, nombre, precio y stock.
Reporte de stock bajo: Mostrar productos con stock <= 2.

*/
