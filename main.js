//const prize = 0.21;

//let kmViaggio = Number(prompt("inserisci i km di viaggio"));

//let etaPersona = Number(prompt("inserisci la tua eta"));

//let costo = (prize * kmViaggio);

//let costoSconto = 0;

//if (etaPersona < 18 ) {
//    costoSconto = (costo / 100 * 20);
//} else if (etaPersona >= 65) {
//    costoSconto = (costo / 100 * 40);
//}

//console.log( "costo scontato: ",Number((costo - costoSconto).toFixed(2)));

//alert( "il tuo costo scontato " + (costo - costoSconto).toFixed(2));

const nome = document.getElementById('name');
const distanzaTreno = document.getElementById('distance');
const eta = document.getElementById('age');
const form = document.querySelector('form');

const nomeBiglietto = document.getElementById('nomeBiglietto');
const costoBiglietto = document.getElementById('costoBiglietto');
const carrozzaPasseggiero = document.getElementById('carrozza');
const codicePasseggiero = document.getElementById('codice');

form.addEventListener('click', function() {
    const numeroCarrozza = Math.floor(Math.random() * 15) + 1;
    const numeroCodice = Math.floor(Math.random() * 1000);

    carrozzaPasseggiero.innerHTML = numeroCarrozza;
    codicePasseggiero.innerHTML = numeroCodice;
});
