function dropWhile(array, callback) {
    let arreglo = [];
    let drop = true;
    
    for (let i = 0; i < array.length; i++) {
        if (drop && !callback(array[i])) {
            drop = false;
        }
        if (!drop) {
            arreglo.push(array[i]);
        }
    }
    return arreglo;
}

// function dropWhile(array, callback) {
//     let result = [];
//     let drop = true;
    
//     for (let i = 0; i < array.length; i++) {
//         if (drop && !callback(array[i])) {
//             drop = false;
//         }
//         if (!drop) {
//             result.push(array[i]);
//         }
//     }
    
//     return result;
// }