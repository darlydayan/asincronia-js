function encadenar(ms) {
    setTimeout(() => {
        let total = 0; 
        const promesa = new Promise((resolve) => {
            resolve(callback());
        });

        promesa.then((resultado) => {
                total += resultado;
                console.log(`Resultado 1: ${resultado}`);
                return callback();
            }).then((resultado) => {
                total += resultado;
                console.log(`Resultado 2: ${resultado}`);
                return callback();
            }).then((resultado) => {
                total += resultado;
                console.log(`Resultado 3: ${resultado}`);s
                console.log("Total:", total);
            });
    }, ms);
}

function callback() {
    return Math.floor(Math.random() * 100);
}

encadenar(1000);