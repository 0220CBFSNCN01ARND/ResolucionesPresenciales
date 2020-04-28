const customFunctions = require('../customFunctions');

let faqsContent = customFunctions.getFaqs();

let finalContent = 'Preguntas Frecuentes \n\n';
finalContent += `Total preguntas: ${faqsContent.total_faqs}\n\n`;

for (let faq of faqsContent.faqs) {
	finalContent += `${faq.faq_title}\n${faq.faq_answer}\n\n\n`;
}

module.exports = finalContent;
