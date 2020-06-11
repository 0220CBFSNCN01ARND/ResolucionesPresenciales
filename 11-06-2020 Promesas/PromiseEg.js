const log = (msg) => console.log(msg);
const seg = 10;

log("Inicio");

const delorean = (meta, seg) => setTimeout(meta, seg);

const espera = (seg) => new Promise((resolve) => delorean(resolve, seg));

espera(seg * 1000).then(() => log(`pasaron ${seg} segundos`));

log("Finalizo");