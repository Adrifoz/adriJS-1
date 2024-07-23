const productos = [
    {"Caño Agua Termofusión 1/2"},
    {"Caño Agua Termofusión 3/4"},
    {"Caño Agua Termofusión 1"},
    {"Caño Gas Termofusión 1/2"},
    {"Caño Gas Termofusión 3/4"},
    {"Caño Gas Termofusión 1"},
];

/////////////////////////////////////////////////


function finalizarCompra() {
    if (carrito.length !== 0) {
        confirm("¿Desea confirmar la compra?")
        alert("Gracias por visitarnos.");
    }else{
        alert("Gracias por visitarnos.");
    
    }
    return;
    };

    function mostrarProductos() {
        let cantidad = 0;
        let opcionProducto = parseInt(prompt(
            "Bienvenido. Seleccione una opción:\n" + productos.join("\n")
            ));
      
          switch(opcionProducto) {
            case 1:
                cantidad = parseInt(prompt("Seleccione cuantos"));
                
              break;
            case 2:
                cantidad = parseInt(prompt("Seleccione cuantos"));
              break;
            case 3:
                cantidad = parseInt(prompt("Seleccione cuantos"));
              break;
            case 3:
                cantidad = parseInt(prompt("Seleccione cuantos"));
              break;
            case 3:
                cantidad = parseInt(prompt("Seleccione cuantos"));
              break;
            case 3:
                cantidad = parseInt(prompt("Seleccione cuantos"));
              break;
            default:
              alert("Opción no válida. Intente de nuevo.");
    
          }
        };


        /////////////////////////////////////////


        // MENU PRINCIPAL

function menu() {
    let opcionMenu
    opcionMenu = parseInt(prompt(
        "Bienvenido. Seleccione una opción:\n" +
        "1. Ver catálogo\n" +
        "2. Ver carrito\n" +
        "3. Finalizar compra\n" 
      ));
  
      switch(opcionMenu) {
        case 1:
          mostrarProductos();
          break;
        // case 2:
        //   carrito();
        //   break;
        case 2:
            finalizarCompra();
          break;
        default:
          alert("Opción no válida. Intente de nuevo.");

      }
    
  };


  

  menu();