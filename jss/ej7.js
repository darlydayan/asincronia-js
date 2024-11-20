function names(array, callback) {

    array = array.find((palabra) =>{ 
//find es un metodo que recorre un array y se queda con la primera coincidencia que encuentre
       return callback(palabra);
    });
    console.log(array);
    return array;
}

function callback(palabra){
    return palabra.ciudad === 'Floridablanca' ; 
};

const array = [{
    nombre: 'Dayana',
    ciudad: 'Giron'
},{
    nombre: 'Michelle',
    ciudad: 'Floridablanca'
},{
    nombre: 'Chris',
    ciudad: 'Madrid'
},{
    nombre: 'Andrew',
    ciudad: 'London'
},{
    nombre: 'Miguel',
    ciudad: 'Piedecuesta'}];

names(array, callback);