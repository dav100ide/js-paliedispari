// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
/*===========================
      functions
===========================*/
function isPalindrome(word) {
   let invertedWord = '';
   for (let i = word.length - 1; i >= 0; i--) {
      invertedWord += word[i];
   }

   if (invertedWord === word) {
      return true;
   }
   return false;
}

/*===========================
      core
===========================*/
// i due dati di ingresso devono essere per forza due stringhe
const word1 = prompt('inserisci parola-1');
if (isPalindrome(word1)) {
   alert('auguri la parola è palindroma');
} else {
   alert('bruh non è palindroma');
}
