/* 
TODO:
//Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
//I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

const computerNumbers = [];
/* Range per la generazione casuale dei numeri */
var iterations = 16;
var min = 1;
var max = 100;

/* 
Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
I numeri non possono essere duplicati.
*/

for (let i = 0; i < iterations; i++) {
	var random = getRandomInt(min, max);
	if (computerNumbers.includes(random)) {
		random = getRandomInt(min, max);
	}
	computerNumbers.push(random);
}
console.log(computerNumbers);

/* Funzioni */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
