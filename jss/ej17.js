function cosita() {
    return fetch("data.json")
}

cosita().then((respuesta) => {
    respuesta.json().then((data) => {
       
for (let i = 0; i < data.length; i++) {
    console.log(data.nombre);
    console.log(data.apellido);
    console.log(data.edad);
        }
    }) 
});