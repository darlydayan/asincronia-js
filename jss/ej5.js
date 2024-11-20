function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        return false;
      }
    }
    return true;
}
  
const numbers = [2, 4, 6, 8];
const allEven = every(numbers, function(num) {
return num % 2 === 0;
});

console.log(allEven);