// variabili
var input_Word;


// VARIABILI ELEMENTI HTML
var btn_Palindromo = document.getElementById('btn_Palindromo');
var container_Input_Word_Pali = document.getElementById('container_Input_Word_Pali');

// VAR ELEMENTI INPUT PROGRAMMA
btn_input_num = document.getElementById('btn_input_num');


// START
btn_Palindromo.addEventListener("click", function(e){
    //  button gioca remove con d-none
    btn_Palindromo.classList.add("d-none");

    // container input diventa visibile
    container_Input_Word_Pali.classList.remove("d-none");
});


// INPUT BUTTON E LOGICA CON CHIAMATE A METODI INNER
btn_input_Word.addEventListener("click", function(e){
    // Salvo valore input numero;
    input_Word = document.getElementById('input_Word').value;

    //  button input number remove container padre aggiungendo a quest'ultimo d-none
    container_Input_Word_Pali.classList.add("d-none");

    if (palindroma(input_Word)) {
        container_IsPalindroma.classList.remove("d-none");
    }else {
        container_NOT_Palindroma.classList.remove("d-none");
    }
});


// FUNZIONI
function palindroma(parola) {
    var lengthWord = parola.length;
    var isPalindroma;

    if (lengthWord <= 0)
        isPalindroma = false;

    else if (lengthWord >= 2) {
        var contatoreIndiceDecrescente = lengthWord;

        for (var i = 0; i < lengthWord; i++) {

            if (parola.charAt(i) == parola.charAt(--contatoreIndiceDecrescente)) {
                isPalindroma = true;
            } else {
                isPalindroma = false;
                // Blocco ciclo è corretto terminare un ciclo in questo modo per evitare break?  o lascio andare?
                i = lengthWord;
            }
        }
    }
    return isPalindroma;
}

function palindromaCaseSensitive(parola) {
    var lengthWord = parola.length;
    var isPalindroma;

    if (lengthWord <= 0)
        isPalindroma = false;

    else if (lengthWord >= 2) {
        var contatoreIndiceDecrescente = lengthWord;

        for (var i = 0; i < lengthWord; i++) {

            if (parola.charAt(i).toUpperCase() == parola.charAt(--contatoreIndiceDecrescente).toUpperCase()) {
                isPalindroma = true;
            } else {
                isPalindroma = false;
                // Blocco ciclo è corretto terminare un ciclo in questo modo per evitare break?  o lascio andare?
                i = lengthWord;
            }
        }
    }
    return isPalindroma;
}
// --------------------------------------------------------------------------




// PARI E DISPARI

// TODO: controllare l'input -aggiungere do while con controllo ripetizione gioco eccc....sorry

// VARIABILI PROGRAMMA
var pari_Or_Dispari;
var numInput;
var numPc = numRandomPc();

// VARIABILI ELEMENTI HTML
var btnStartGameNumber = document.getElementById('btn-Pari-E-Dispari');
var container_input_PariDispari = document.getElementById('container_input_PariDispari');

var containerInputNum = document.getElementById('container_inputNum');

// CONTAINER RISULTATO
var container_win = document.getElementById('container_win');
var container_lost = document.getElementById('container_lost');

// VAR ELEMENTI INPUT/VALORE PROGRAMMA
btn_input_Pari = document.getElementById('btn_input_Pari');
btn_input_Dispari = document.getElementById('btn_input_Dispari');

var btn_input_num = document.getElementById('btn_input_num');



// START
btnStartGameNumber.addEventListener("click", function(e){
    //  button gioca remove con d-none
    btnStartGameNumber.classList.add("d-none");
    // container BUTTON PARI E DISPARI visibile togliendo d-none
    container_input_PariDispari.classList.remove("d-none");
});

// INPUT BUTTON
btn_input_Pari.addEventListener("click", function(e){
    // Salvo il valore
    pari_Or_Dispari = "pari";
    container_input_PariDispari.classList.add("d-none");
    container_inputNum.classList.remove("d-none");
});

btn_input_Dispari.addEventListener("click", function(e){
    // Salvo il valore
    pari_Or_Dispari = "dispari";
    container_input_PariDispari.classList.add("d-none");
    container_inputNum.classList.remove("d-none");
});

// LOGICA
btn_input_num.addEventListener("click", function(e){
    // Salvo valore input numero;
    numInput = document.getElementById('inputNum').value;

    //  button input number remove container padre aggiungendo a quest'ultimo d-none
    container_inputNum.classList.add("d-none");

    if (somma(numInput,numPc) % 2 == 0 && pari_Or_Dispari.toUpperCase() == "PARI" ||
        somma(numInput,numPc) % 2 == 1 && pari_Or_Dispari.toUpperCase() == "DISPARI") {
        container_win.classList.remove("d-none");
        console.log(numPc);
        console.log(pari_Or_Dispari);

    }else {
        container_lost.classList.remove("d-none");
        console.log(numPc);
        console.log(pari_Or_Dispari);
    }

});

// Funzioni programma pari-o-dispari

function numRandomPc(){
    var numeroRandom = Math.round(5 * Math.random() + 1);
    return numeroRandom;
}

function somma(numUser,numPc){
    return numUser + numPc;
}
