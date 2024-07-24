const productos = [
  "1. Caño Agua Termofusión 1/2",
  "2. Caño Agua Termofusión 3/4",
  "3. Caño Agua Termofusión 1",
  "4. Caño Gas Termofusión 1/2",
  "5. Caño Gas Termofusión 3/4",
  "6. Caño Gas Termofusión 1"
];

const arrayVacio = [];
let carrito = [];

let total = 0;
let nombre

/////////////////////////////////////////////////


// FUNCIONES COMPLEMENTARIAS



function finalizarCompra() {

    const pagar = confirm("¿Desea efectuar el pago?");
    if (total !== 0 && pagar) {
        confirm("El total es $" + total + "\n\n" + "Historial de compra" + "\n\n" + carrito.join("\n") +"\n\n" +"¿Desea confirmar la compra?");
        alert("Compra realizada con éxito");
        alert("Gracias por visitarnos.");
        total = 0;
        carrito = arrayVacio;
        menu();
    }else if(pagar){
        alert("Todavía no tiene nada en su carrito")
        menu();
    }else{
        alert("Gracias por visitarnos.");
        total = 0;
        carrito = arrayVacio;
    }
    return
    
  };

    function suma(precioTotal){
      total += precioTotal
    }

    function addCarrito(nombre,cantidad){
      carrito.push(cantidad)
      carrito.push(nombre)
      console.log(carrito)
      
    }

    function mostrarProductos() {
        let cantidad = 0;
        let cantidadXvalor = 0;
        let opcionProducto = parseInt(prompt(
          "Bienvenido. Seleccione una opción:\n\n" + productos.join("\n") + "\n\n" + "7. Salir" + "\n"
          ));
      
          switch(opcionProducto) {
            case 1:
                nombre = "Caño Agua Termofusión 1/2";
                cantidad = parseInt(prompt(nombre +"\n\n"+ "Seleccione cuantos"));
                cantidadXvalor = cantidad * 8000;
                suma(cantidadXvalor);
                addCarrito(nombre,cantidad);
              break;
            case 2:
                nombre = "Caño Agua Termofusión 3/4";
                cantidad = parseInt(prompt(nombre +"\n\n"+ "Seleccione cuantos"));
                cantidadXvalor = cantidad * 9500;
                suma(cantidadXvalor);
                addCarrito(nombre,cantidad);
              break;
            case 3:
                nombre = "Caño Agua Termofusión 1";
                cantidad = parseInt(prompt(nombre +"\n\n"+ "Seleccione cuantos"));
                cantidadXvalor = cantidad * 11000;
                suma(cantidadXvalor);
                addCarrito(nombre,cantidad);
              break;
            case 4:
                nombre = "Caño Gas Termofusión 1/2";
                cantidad = parseInt(prompt(nombre +"\n\n"+ "Seleccione cuantos"));
                cantidadXvalor = cantidad * 12000;
                suma(cantidadXvalor);
                addCarrito(nombre,cantidad);
              break;
            case 5:
                nombre = "Caño Gas Termofusión 3/4";
                cantidad = parseInt(prompt(nombre +"\n\n"+ "Seleccione cuantos"));
                cantidadXvalor = cantidad * 15000;
                suma(cantidadXvalor);
                addCarrito(nombre,cantidad);
              break;
            case 6:
                nombre = "Caño Gas Termofusión 1";
                cantidad = parseInt(prompt(nombre +"\n\n"+ "Seleccione cuantos"));
                cantidadXvalor = cantidad * 18000;
                suma(cantidadXvalor);
                addCarrito(nombre,cantidad);
              break;
            case 7:
                menu();
              break;
            default:
              alert("Opción no válida. Intente de nuevo.");
    
    
          }
          mostrarProductos();
        };


        /////////////////////////////////////////


        // MENU PRINCIPAL

function menu() {
    let opcionMenu = parseInt(prompt(
        "Bienvenido. Seleccione una opción:\n" +
        "1. Ver catálogo\n" +
        "2. Finalizar compra\n" 
      ));
  
      switch(opcionMenu) {
        case 1:
          mostrarProductos();
          break;
        case 2:
            finalizarCompra();
          break;
        default:
          alert("Opción no válida. Intente de nuevo.");

      }
    
  };


  

  menu();