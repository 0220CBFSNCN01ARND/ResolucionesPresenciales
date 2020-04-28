const directorios = require('./src');

module.exports = {
    routes: (req, res) => {
        switch (req.url) {
            case '/':
                res.end('home');
                break;
            case '/en-cartelera':
                res.end('en-cartelera');
                break;
            case '/mas-votadas':
                res.end('mas-votadas');
                break;
            case '/sucursales':
                res.end(directorios.sucursales);
                break;
            case '/contacto':
                res.end(directorios.contacto);
                break;
            case '/preguntas-frecuentes':
                res.end('preguntas-frecuentes');
                break;
            default:
                res.end(req.url);
                break;
        }
    }

}