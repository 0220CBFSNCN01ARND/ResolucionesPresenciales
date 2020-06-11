const log = (msg) => console.log(msg);

new Promise((resolve, reject) => {
        log("Inicializa");
        throw new Error("Algo paso, no funciona");
        resolve();
    })
    .then(() => {
        log("Haz algo");
    })
    .catch((msg) => {
        // El Catch solo se ejecuta para el codigo anterior
        log("Capturamos el error");
    })
    .then(() => {
        throw new Error("Algo paso, no funciona");
        log("Haz algo");
    });