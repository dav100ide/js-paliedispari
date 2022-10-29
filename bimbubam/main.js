// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/*=============================
      functions
===============================*/

function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
   if (num % 2 === 0) {
      return true;
   }
   return false;
}

/*=============================
      core
===============================*/
let userChoice = prompt('pari o dispari?');
// input validation
while (userChoice !== 'pari' && userChoice !== 'dispari') {
   userChoice = window.prompt('pari o dispari????? mongolo');
}
let userNumber = Number(prompt('scegli da 1 a 5'));
// input validation
while (userNumber < 1 || userNumber > 5) {
   userNumber = Number(prompt('UN NUMERO DA 1 A 5 BRUH'));
}

const sum = userNumber + getRndInteger(1, 5);
if (isEven(sum) && userChoice === 'pari') {
   alert(`la somma è ${sum}, hai vinto`);
} else if (isEven(sum) && userChoice === `dispari`) {
   alert(`la somma è ${sum}, hai perso`);
} else if (!isEven(sum) && userChoice === `dispari`) {
   alert(`la somma è ${sum}, hai vinto`);
} else {
   alert(`la somma è ${sum}, hai perso`);
}
console.log(userNumber, sum);
