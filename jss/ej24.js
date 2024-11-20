// const gente = {
//     nombre : "Dayana",
//     edad : 19
// }

// const manejador = {
//     get(objetivo,propiedad){
//         console.log(`obteniendo ${propiedad}`);
//         return objetivo[propiedad]= "No podemos entregar"
//     },
//     set(objetivo,propiedad,valor){

//         if(propiedad == "nombre" && isNaN(valor)){
//         throw new Error("Valor no permitido");
//         }
//     objetivo [propiedad] = valor
//     }
// }

// const proxy = new Proxy(gente, manejador);

// proxy.nombre = "Dayana Rueda"; 
// proxy.edad = 16;            

// console.log(proxy.nombre); 
// console.log(proxy.edad);   

const persona = { 
    nombre: "John",
    edad: 39 
}
    
const manejador = {
    get(objetivo, propiedad) {
        console.log( `Obteniedo la propiedad ${propiedad}`);   
            return objetivo[propiedad] }, 
            set(objetivo, propiedad, valor) {
                if (Object.keys(objetivo).indexOf(propiedad) === -1) { 
                    
                return console.error(`La propiedad ${propiedad} no existe`)}
                if (propiedad == "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) { 
                    throw new Error("Valor debe contener solo letras y espacios"); 
                }
                if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) { 
                    throw new Error("Valor debe contener solo números");
                }
        
        objetivo[propiedad] = valor 
        const proxy = new Proxy(persona, manejador); // 
        
        proxy.apellido = "John becerra",
        proxy.nombre = "john becerra",
        proxy.edad = "letras"
        
        console.log(proxy.nombre); 
        console.log(persona)