const nome = document.getElementById("nameInput");
const distanzaTreno = document.getElementById("distanceInput");
const eta = document.getElementById("ageSelect");
const form = document.querySelector("form");

const nomeBiglietto = document.getElementById("nomeBiglietto");
const scontoPasseggiero = document.getElementById("sconto");
const costoBiglietto = document.getElementById("costoBiglietto");
const carrozzaPasseggiero = document.getElementById("carrozza");
const codicePasseggiero = document.getElementById("codice");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomePasseggero = nome.value.trim();
    const distanza = parseFloat(distanzaTreno.value);
    const fasciaEta = eta.value;

    const prezzoPerKm = 0.21;
    let costo = distanza * prezzoPerKm;
    let sconto = "Nessuno";

    if (fasciaEta === "minorenne") {
        costo *= 0.8;
        sconto = "20%";
    } else if (fasciaEta === "anziano") {
        costo *= 0.6;
        sconto = "40%";
    }

    const numeroCarrozza = Math.floor(Math.random() * 15) + 1;
    const numeroCodice = Math.floor(Math.random() * 1000);

    carrozzaPasseggiero.innerHTML = numeroCarrozza;
    codicePasseggiero.innerHTML = numeroCodice;
    nomeBiglietto.innerHTML = nomePasseggero;
    scontoPasseggiero.innerHTML = sconto;
    costoBiglietto.innerHTML = costo.toFixed(2) + " €";
});