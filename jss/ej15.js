function delay(ms) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, ms);
        setTimeout(() => {
            reject("Fue rechazada");
        }, 2000);
    });
}

delay(3000).then((promesa) => console.log(promesa));