const customFunctions = require('../customFunctions');

let movieFileContent = customFunctions.getMovies();

let finalContent = 'Bienvenidas/os a DH MOVIES el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n\n';

let onlyMoviesName = movieFileContent.movies.map(movie => movie.title);
onlyMoviesName.sort();

finalContent += `Total películas en cartelera: ${onlyMoviesName.length}\n\n`;
finalContent += `Listado de películas por título:\n\n`;

for (let oneMovie of onlyMoviesName) {
	finalContent += `${oneMovie}\n`;
}

finalContent += `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

module.exports = finalContent;