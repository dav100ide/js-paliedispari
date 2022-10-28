// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
/*===========================
      functions
===========================*/
function isPalindrome(word1, word2) {
   let invertedWord1 = '';
   for (let i = word1.length - 1; i >= 0; i--) {
      invertedWord1 += word1[i];
   }

   if (invertedWord1 === word2) {
      return true;
   }
   return false;
}

/*===========================
      core
===========================*/
// i due dati di ingresso devono essere per forza due stringhe
const word1 = prompt('inserisci parola-1');
const word2 = prompt('inserisci parola-2');
if (isPalindrome(word1, word2)) {
   alert('auguri la parola è palindroma');
} else {
   alert('bruh non è palindroma');
}
