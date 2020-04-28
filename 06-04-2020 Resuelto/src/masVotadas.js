const customFunctions = require('../customFunctions');

let movieFileContent = customFunctions.getMovies();

let morePopular = movieFileContent.movies.filter(movie => movie.vote_average >= 7);
let ratingAverage = Math.round(morePopular.reduce((acum, movie) => acum + movie.vote_average, 0) / morePopular.length);

let finalContent = 'Más Votadas \n\n';
finalContent += `Total películas: ${morePopular.length}\n\n`;
finalContent += `Rating promedio: ${ratingAverage}\n\n`;

for (let movie of morePopular) {
	finalContent += `Título: ${movie.title}\nRating: ${movie.vote_average}\nReseña: ${movie.overview}\n\n\n`;
}

module.exports = finalContent;
