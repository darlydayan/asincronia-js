function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return true;
      }
    }
    return false;
}
  
const nume = [1, 3, 5, 7, 8];
const devolver = some(nume, function(num) {
return num % 2 === 0;
});

console.log(devolver);