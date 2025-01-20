const nome = document.getElementById('name');
const distanzaTreno = document.getElementById('distance');
const eta = document.getElementById('age');
const form = document.querySelector('form');

const nomeBiglietto = document.getElementById('nomeBiglietto');
const scontoPasseggiero = document.getElementById('sconto');
const costoBiglietto = document.getElementById('costoBiglietto');
const carrozzaPasseggiero = document.getElementById('carrozza');
const codicePasseggiero = document.getElementById('codice');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomePasseggero = nome.value.trim();
    const distanza = parseFloat(distanzaTreno.value);
    const fasciaEta = eta.value;

    const prezzoPerKm = 0.21;
    let costo = distanza * prezzoPerKm;
    let sconto = 'Nessuno';

    if (fasciaEta === 'minorenne') {
        costo -= costo * 0.2;
        sconto = '20%';
    } else if (fasciaEta === 'anziano') {
        costo -= costo * 0.4;
        sconto = '40%';
    }

    let numeroCarrozza = Math.floor(Math.random() * 15) + 1;
    let numeroCodice = Math.floor(Math.random() * 1000);

    carrozzaPasseggiero.innerHTML = numeroCarrozza;
    codicePasseggiero.innerHTML = numeroCodice;
    nomeBiglietto.innerHTML = nomePasseggero;
    scontoPasseggiero.innerHTML = sconto;
    costoBiglietto.innerHTML = costo.toFixed(2) + ' €';
});

