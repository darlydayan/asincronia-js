const leer = async () => { 
    try { 
    return await fetch("data.json");
    } catch (erroг) { 
    console.log(error); 
    } 
}

leer().then(data => { 
data.json().then(nombre => { 
    const filtro = nombre.filter(item => item.nombre.startsWith("1")) 
    console.table(filtro); 
});

}).then(body => {
    console.table(body);
})