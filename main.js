const prize = 0.21;

let kmViaggio = Number(prompt("inserisci i km di viaggio"));

let etaPersona = Number(prompt("inserisci la tua eta"));

let costo = (prize * kmViaggio);

let costoSconto = 0;

console.log("costo inziale: ", costo);

if (etaPersona < 18 ) {
    costoSconto = (costo / 100 * 20);
} else if (etaPersona >= 65) {
    costoSconto = (costo / 100 * 40);
}

console.log( "costo scontato: ",Number((costo - costoSconto).toFixed(2)));

alert( "il tuo costo scontato " + (costo - costoSconto).toFixed(2));