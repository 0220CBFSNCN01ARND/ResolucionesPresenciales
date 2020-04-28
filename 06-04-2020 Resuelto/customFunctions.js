const fs = require('fs');
const path = require('path');

const parsingFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const moviesFilePath = path.join(__dirname, '/data/movies.json');
const faqFilePath = path.join(__dirname, '/data/faqs.json');
const theatersFilePath = path.join(__dirname, '/data/theaters.json');

module.exports = {
	getMovies: () => parsingFile(moviesFilePath),
	getFaqs: () => parsingFile(faqFilePath),
	getTheaters: () => parsingFile(theatersFilePath),
}