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

let prezzoUmano = prezzo.toFixed(2);
if(eta < 18 ){
    // va applicato uno sconto del 20% per i minorenni
    let prezzoScontato = prezzoUmano - (0.2 * prezzoUmano);
    let prezzoScontatoUmano = prezzoScontato.toFixed(2);
    console.log(prezzoScontatoUmano);  
}else if( eta > 65){
    //va applicato uno sconto del 40% per gli over 65
    let prezzoScontato = prezzoUmano - (0.4 * prezzoUmano);
    let prezzoScontatoUmano = prezzoScontato.toFixed(2);
    console.log(prezzoScontatoUmano); 
    
} else {
    console.log(prezzoUmano);
}