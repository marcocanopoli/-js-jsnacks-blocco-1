/*
Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
*/

//First and last names arrays
var firstNamesList = ["Oscar", "Fabio", "John", "Tom", "Mia", "Elizabeth", "Chiara", "Emma"]
var lastNamesList = ["Rossi", "Bianchi", "Verdi", "Ferrari", "Smith", "Williams", "Brown", "Johnson"];

//prints random 10-elements list in ul
for (var i = 0; i < 10; i++) {
    document.getElementById("invited").innerHTML += "<li> " + randomName(firstNamesList, lastNamesList) + "</li>";
}

//---------------------------------
//FUNCTIONS
//returns random element from first array + random element from second array
function randomName(firstNames, lastNames) {
    firstNameIndex = Math.floor(Math.random() * firstNames.length);
    lastNameIndex = Math.floor(Math.random() * lastNames.length);
    return firstNames[firstNameIndex] + " " + lastNames[lastNameIndex];
}