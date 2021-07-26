/* 
TODO:
//Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
//I numeri non possono essere duplicati.
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

const computerNumbers = [];
const userNumbers = [];
/* Range per la generazione casuale dei numeri */
var iterations = 16;
var min = 1;
var max = 100;

var userChoices = max - iterations;

/* 
Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
I numeri non possono essere duplicati.
*/

for (let i = 0; i < iterations; i++) {
	do {
		var random = getRandomInt(min, max);
	} while (computerNumbers.includes(random));
	computerNumbers.push(random);
}
console.log(computerNumbers);

/* 
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
*/

for (let i = 0; i < userChoices; i++) {
	do {
		var inputNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
	} while (userNumbers.includes(inputNumber) || inputNumber > max || inputNumber < min);
	userNumbers.push(inputNumber);
	console.log(userNumbers);
}

/* Funzioni */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
