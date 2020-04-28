const customFunctions = require('../customFunctions');

let movieFileContent = customFunctions.getMovies();

let finalContent = 'En Cartelera \n\n';
finalContent += `Total películas: ${movieFileContent.movies.length}\n\n`;

for (let movie of movieFileContent.movies) {
	finalContent += `Título: ${movie.title}\nReseña: ${movie.overview}\n\n\n`;
}

module.exports = finalContent;
