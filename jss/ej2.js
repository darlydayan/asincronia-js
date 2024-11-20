let i =0
setTimeout(() => alert(i), 100)
for (let j = 0; j< 100000000; j++){
    i++
}
// setTimeout(() => {
//     console.log("setTimeout ejecutado");
//   }, 100);
  
//   let start = Date.now();
//   while (Date.now() - start < 200) {
//   }
  
//   console.log("Bucle finalizado");