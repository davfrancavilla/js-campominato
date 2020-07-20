var computerNumbers = [];

// inserisco 16 numeri casuali non ripetuti in un array
while (computerNumbers.length<17) {
    n = getRandom(1,100);
    if (!isRepeated(computerNumbers,n)){
        computerNumbers.push(n);
    }
}









// fuzione per controllare se un numero è gia presente in un array
function isRepeated(a, element){
    var i = 0;
    var check = false;
    while (i<a.length && !check) {
        if (a[i] == element) {
            check = true;
        }
        i++
    }
    return check;
}



// funzione per generare numeri random
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
