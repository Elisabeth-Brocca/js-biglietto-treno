/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 



TOOLS:
Variabili let / const
numbers / string
IF / ELSE
*/

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
let chilometri = prompt('Numero di chilometri')

// l'età del passeggero
let eta = prompt("Età del passeggero")

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let prezzo = chilometri * 0.21

if(eta < 18 ){
    // va applicato uno sconto del 20% per i minorenni
    let prezzoScontato = prezzo - (0.2 * prezzo)
    console.log(prezzoScontato);    
}else if( eta > 65){
    //va applicato uno sconto del 40% per gli over 65
    let prezzoScontato = prezzo - (0.4 * prezzo)
    console.log(prezzoScontato); 
    
} else {
    console.log(prezzo);
}



