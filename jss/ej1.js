function imprimirNumeros(desde, hasta) {
    let contador = desde;
    
    const intervalo = setInterval(() => {
      console.log(contador);
      if (contador === hasta) {
        clearInterval(intervalo);
      }
      contador++;
    }, 1000);
  }
  
  imprimirNumeros(1, 5);

  function imprimirNumeros(desde, hasta) {
    let contador = desde;
  
    function imprimir() {
      console.log(contador);
      if (contador < hasta) {
        contador++;
        setTimeout(imprimir, 1000);
      }
    }
    
    imprimir();
  }
  
  imprimirNumeros(1, 5);