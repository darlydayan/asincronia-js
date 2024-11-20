function promesa() {

    return new Promise ((resolve, reject) => {
        
        setTimeout (function () {

            try {

                resolve("promise resuelta");

            } catch (error) {
                Promise.reject("Rechazada")
            }
        }, 3000)
    });
}

promesa().then((retorno) => {
    console.log(retorno);
});