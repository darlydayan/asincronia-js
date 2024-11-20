const data = validar();
fetch 
  
function validar() {
  return new Proxy({}, {
    set(objeto, propiedad, valor) {
      if (propiedad === 'nombre' && !/^[a-zA-Z]+$/.test(valor)) {
        console.error("Solo se aceptan letras");
        return false;
      }

      if (propiedad === 'tele' && !/^\d+$/.test(valor)) {
        console.error("Solo debe contener numeros");
        return false;
      }

      if (propiedad === 'email' && !/^\S+@\S+\.\S+$/.test(valor)) {
        console.error("Correo mal escrito");
        return false;
      }
      if (propiedad === 'date' && !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
        console.error("La fecha debe estar en formato YYYY-MM-DD");
        return false;
      }

      if (typeof valor === 'string' && valor.trim() !== valor) {
        console.error("No espacios");
        return false;
      }
      
      objeto[propiedad] = valor;
      return true;
    }
  });
}