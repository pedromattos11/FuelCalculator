// Javascript File

document.getElementById("calcular").addEventListener("click", function() {
    const gasolinaPrice = parseFloat(document.getElementById("gasolina").value);
    const etanolPrice = parseFloat(document.getElementById("etanol").value);

    if (!isNaN(gasolinaPrice) && !isNaN(etanolPrice)) {
        const etanolPercentage = (etanolPrice / gasolinaPrice) * 100;
        const resultado = document.getElementById("resultado");

        if (etanolPercentage <= 75) {
            resultado.textContent = "Vale a pena abastecer com etanol!";
        } else {
            resultado.textContent = "Vale a pena abastecer com gasolina!";
        }
    }
});