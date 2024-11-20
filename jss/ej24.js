const gente = {
    nombre : "Dayana",
    edad : 19
}

const manejador = {
    get(objetivo,propiedad){
        console.log(`obteniendo ${propiedad}`);
        return objetivo[propiedad]= "No podemos entregar"
    },
    set(objetivo,propiedad,valor){

        if(propiedad == "nombre" && isNaN(valor)){
        throw new Error("Valor no permitido");
        }
    objetivo [propiedad] = valor
    }
}

const proxy = new Proxy(gente, manejador);

proxy.nombre = "Dayana Rueda"; 
proxy.edad = 16;            

console.log(proxy.nombre); 
console.log(proxy.edad);   