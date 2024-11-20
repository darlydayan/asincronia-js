const leer = async () => { 
    try { 
    return await fetch("./ej18.json");
    } catch (erroг) { 
    console.log(error); 
    } 
}

leer().then(data => { 
data.json().then(body => { 
    const filtro = body.filter(item => item.body.startsWith("1")) 
    console.table(filtro); 
});

}).then(body => {
    console.table(body);
})