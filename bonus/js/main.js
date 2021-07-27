/* 
TODO:
//Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
//I numeri non possono essere duplicati.
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

var computerNumbers = [];
var userNumbers = [];
var difficulty = document.getElementById('difficulty').value;
/* ------ Range per la generazione casuale dei numeri ----- */
var bombsAmount = 16;
var min = 1;
var max = 100;
/* --------------------------------------------------------- */
// Variabile per gestire il numero massimo di input che l'utente ha a disposizione
var userChoices = max - bombsAmount;

switch (difficulty) {
	case 'medium':
		max = 80;
		break;

	case 'hard':
		max = 50;
		break;
}

generateBombs(computerNumbers);
generateField(max);
/* Funzione per la semplice generazione random di un numero tra min e max inclusi */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Funzione per generare i numeri delle bombe senza avere numeri doppi */
function generateBombs(array) {
	for (let i = 0; i < bombsAmount; i++) {
		do {
			var random = getRandomInt(min, max);
		} while (array.includes(random));
		array.push(random.toString());
	}
}

function generateField(amount) {
	for (let i = 1; i <= amount; i++) {
		let cell = `
			<div data-cell='${i}' class="cell"></div>
		`;

		let addCells = document.createElement('DIV');
		addCells.classList.add('square');
		addCells.innerHTML = cell;
		document.getElementById('field').appendChild(addCells);
	}
}

function playGame() {
	document.getElementById('field').addEventListener('click', function (e) {
		let element = document.querySelectorAll("[data-cell='" + e.target.dataset.cell + "']");
		element[0].classList.add('clicked');
		if (computerNumbers.includes(e.target.dataset.cell)) {
			alert('Hai Perso! Punteggio: ' + userNumbers.length);
			location.reload();
		} else if (userNumbers.length == userChoices) {
			alert('Hai Vinto! Punteggio: ' + userNumbers.length);
			location.reload();
		} else {
			userNumbers.push(e.target.dataset.cell);
		}
	});
}
