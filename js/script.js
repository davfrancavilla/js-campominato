var difficulty;
var userNumbers = [];

// permetto all'utente di scegliere la difficolta del gioco
do {
    difficulty = parseInt(prompt('Segli la difficoltà: 0, 1 o 2'));
    switch (difficulty) {
        case 0:
            createUserArray(100);
            totalPoints(100);
            break;
        case 1:
            createUserArray(80);
            totalPoints(80);
            break
        case 2:
            createUserArray(50);
            totalPoints(50);
            break
        default:
            alert('Scelta non valida');
    }
} while (difficulty<0 || difficulty>2);

// creo l'array con i numeri del computer
function createComputerArray(max){
    var computerNumbers = [];
    var n;
    while (computerNumbers.length<16) {
        n = getRandom(1,max);
        if (!isRepeated(computerNumbers,n)){
            computerNumbers.push(n);
        }
    }
    return computerNumbers;
}

// creo l'array con i numeri dell'utente
function createUserArray(max){
    var length = max - 16;
    var userNumber;
    var computerNumbers = createComputerArray(max);
    while (userNumbers.length<length && !isRepeated(computerNumbers, userNumber)){
        userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + max));
        if (!isNaN(userNumber)){
            if (!isRepeated(userNumbers,userNumber) && (0<userNumber) && (userNumber<=max)){
                userNumbers.push(userNumber);
            } else if (userNumber<1 || userNumber>max) {
                alert('Il numero deve essere compreso tra 1 e ' + max);
            } else if (isRepeated(userNumbers,userNumber)) {
                alert('Non puoi inserire più volte lo stesso numero');
            }
        } else {
            alert('Inserire un numero');
        }
    }
    return userNumbers;
}

// calcolo se l'utente ha vinto o meno e i punti fatti
function totalPoints(max){
    var length = max - 16;
    if (userNumbers.length<length) {
        var points = userNumbers.length - 1;
        alert('Hai perso. Punteggio totale: ' + points + ' punti');
    } else {
        alert('Hai vinto');
    }
    return 0;
}



// funzione per controllare se un numero è gia presente in un array
function isRepeated(a, element){
    var i = 0;
    var check = false;
    while (i<a.length && !check) {
        if (a[i] == element) {
            check = true;
        }
        i++;
    }
    return check;
}



// funzione per generare numeri random
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
