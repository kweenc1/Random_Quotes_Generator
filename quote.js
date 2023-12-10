const differentQuotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is what happens when you\'re busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don\'t watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];
const randomNumber = Math.floor(Math.random() * differentQuotes.length);
const random = differentQuotes[randomNumber];

function newQuote() {
    
    console.log(random);
  }
  newQuote();