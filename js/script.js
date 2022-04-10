/*
**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100.

**MILESTONE 1**
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

**MILESTONE 2**
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

**MILESTONE 3**
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

*/

//salvo il container in una cost
const container = document.querySelector('.container');

//salvo in una variabile il numero di iterazioni
const maxIter = 30;

for(let i=1; i<=maxIter; i++){

    //creo l'elemento da aggiungere
    const boxIN = document.createElement('div');

    //gli do la classe
    boxIN.className = 'box';

    if( (i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
        boxIN.append('FizzBuzz');
    } else if( i % 3 === 0){
        console.log("Fizz");
        boxIN.append("Fizz");
    } else if( i % 5 === 0){
        console.log("Buzz");
        boxIN.append("Buzz");
    } else{
        console.log(i);
        boxIN.append(i);
    }

    container.append(boxIN);
    
}