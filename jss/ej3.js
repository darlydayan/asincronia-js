function map(array, callback) {
    const arreglo = [];
  
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i]);
      arreglo.push(result); //se agrega al array
    }
  
    return arreglo;
  }

  const numbers = [1, 2, 3, 4];
  const doubled = map(numbers, function(num) {
    return num * 2;
  });
  
  console.log(doubled);