let i = 0;
console.log("el tiempo estimado es de ");

setTimeout (() => alert(i), 100)
for (let j = 0; j < 100000000; j++) {
    i++;
}