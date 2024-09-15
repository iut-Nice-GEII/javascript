function somme() {
    let nbr1 = Number(document.getElementById("nbr1").value);
    let nbr2 = Number(document.getElementById("nbr2").value);
    let sum = nbr1 + nbr2;
    document.getElementById("resultat").value = sum;
}