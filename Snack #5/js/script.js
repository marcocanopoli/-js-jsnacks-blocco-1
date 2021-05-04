/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
Stampa l'array nella console.
*/

//vars initialize
var nums = [];
var inputNum;

//user number input * 10
for (var i = 0; i < 10; i++) {
    inputNum = parseInt(prompt("Inserisci un numero:"));
    if (isOdd(inputNum)) {
        nums.push(inputNum);
    }
}

//prints array in console
console.log(nums);

//-------------------------
//FUNCTIONS

//returns true if num is odd
function isOdd(num) {
    return (num % 2 != 0);
}