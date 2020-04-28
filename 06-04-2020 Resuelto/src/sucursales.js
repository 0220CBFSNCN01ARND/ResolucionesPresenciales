const customFunctions = require('../customFunctions');

let theatersContent = customFunctions.getTheaters();

let finalContent = 'Nuestras Salas \n\n';
finalContent += `Total de salas: ${theatersContent.total_theaters}\n\n`;

for (let theater of theatersContent.theaters) {
	finalContent += `${theater.name}\n${theater.address}\n${theater.description}\n\n\n`;
}

module.exports = finalContent;
