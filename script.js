/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


/* let x = prompt("inserici il primo numero")
x = Number(x)
console.log(x)

let y = prompt("inserici il secondo numero")
y = Number(y)
console.log(y) */

let x = document.getElementById("x")
let y = document.getElementById("y")

function crazySum(x,y){
    if(x.value+y.value){
        //console.log(x+y)
        //alert("la somma e "+ (x + y))
        document.getElementById("crazyResult").innerText = "la somma e "+ (parseInt(x.value) + parseInt(y.value));
        //let clearInput = `${x.value=""}  ${y.value=""}`
    }if(x.value==y.value){
        console.log((x+y)*3)
       //alert("i valori inseriti sono uguali e vengono moltiplicati per tre: " + (3 * (x + y)))
       document.getElementById("crazyResult").innerText = "i valori inseriti sono uguali e vengono moltiplicati per tre: " + ((parseInt(x.value) + parseInt(y.value))*3)
       //let clearInput = `${x.value=""}  ${y.value=""}`
       
    }
}
//crazySum(5,5)
//crazySum(x,y)




/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let boundary = x => x <= 100 || x == 400

console.log(boundary(400))



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


//let x = prompt("scrivi la tua parola")

let xX = "Hello World"

function reverseString(x){
    let arrayX = xX.split("")
    //console.log(arrayX)

    let backArreyX = arrayX.reverse()
    //console.log(backArreyX)

    let arryXnoSapce = backArreyX.join("")
      console.log(arryXnoSapce)
     //alert(arryXnoSapce)
}

let resoultX = reverseString(x)



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

let w = "hello world i'm back";
console.log(w);

function upperFirst(w) {
  let arrayW = w.split(" ");
  console.log(arrayW);

  let newArrayW = [];

  for (let i = 0; i < arrayW.length; i++) { // Ciclo per ogni parola nell'array
    let word = arrayW[i];

    function upperFirst1(word) {
      let letterSplit = word.split("");
      let letterUp = letterSplit[0].toUpperCase();
      let alfword = letterSplit.splice(1);
      alfword.unshift(letterUp);// Aggiungi la lettera maiuscola all'inizio
      return alfword.join(""); // Restituisci la parola modificata
      
    }

    let newWord = upperFirst1(word); // Chiama la funzione interna per modificare la parola
    newArrayW.push(newWord); // Aggiungi la parola modificata al nuovo array
  }

  return newArrayW.join(" "); // Restituisci la stringa con le parole modificate
}

let textUpper = upperFirst(w);
console.log(textUpper); // Output: Hello World I'm Back



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/


function giveMeRandom (n){

  //console.log(Math.floor(Math.random() * 10) + 1)
  let numbers = Math.floor(Math.random() * 10) + 1
  console.log(numbers)
  //newArrayNumb.push(numbers)
  document.getElementById("number").innerText = numbers

}



//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let l1 = document.getElementById("base")

let l2 = document.getElementById("height")

function area(l1,l2){

  let result = l1.value * l2.value
  console.log(result)
  document.getElementById("result").innerText = result

  let clearInput = `${l1.value=""}  ${l2.value=""}`
}

//let parm = area(5,5)



/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
