/*
1 Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
2 Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
3 Al termine dei 30 secondi l'utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
4 Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert
 quanti e quali dei numeri da indovinare sono stati individuati. 
 (Bonus: stampare in pagina il risultato, in alternativa all'alert.) */


var numberList = [];
var userList = [];
var correctNumberList = [];


 //CICLO WHILE PER INSERIRE 4 NUMERI RANDOM NELL'ARREY
while (numberList.length < 5) {
    var choiceNumber = randomNumber(1, 100);
    // VERIFICO CHE NELLA LISTA NON SIANO PRESENTI QUEI NUMERI
    if (!numberList.includes(choiceNumber)) {
        numberList.push(choiceNumber);
    }
}
alert("I numeri sono: " + numberList.sort());

//FUNZIONE TIMER CON RICHIESTA NUMERO
setTimeout(function() {
    while (userList.length < 5) {
        var userChoice = getNumber();
        if (!userList.includes(userChoice)) {
            userList.push(userChoice);
            if (numberList.includes(userChoice)) {
                correctNumberList.push(userChoice);
            } 
        } else {
            alert("Hai già scelto questo numero");
        }
    }  
    var message = "Hai indovinato: " + correctNumberList + "punteggio: " + correctNumberList.length;
    if(correctNumberList.length === 0){
        message = "Non hai indovinato nessun numero";
    }
    alert(message);
}, 2000);


//FUNZIONE NUMERO RANDOM
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//FUNZIONE PER RICHIEDERE UN NUMERO
function getNumber() {
    var number = prompt('Inserisci un numero da 1 a 100');
    while (!number || isNaN(number) || number <= 0 || number > 100) {
      number = prompt('ATTENZIONE, inserisci un numero valido');
    }
    return number;
  }