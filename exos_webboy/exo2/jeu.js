let id_valeur1 = document.getElementById("valeur1");
let id_valeur2 = document.getElementById("valeur2");
let id_res = document.getElementById("resultat");
let id_img1 = document.getElementById("img1");
let id_img2 = document.getElementById("img2");
function lancer_de() {
    let valeur1 = Math.floor(Math.random() * 6) + 1;
    let valeur2 = Math.floor(Math.random() * 6) + 1;
    console.log("" + valeur1 + " " + valeur2);
    id_valeur1.value = valeur1;
    id_valeur2.value = valeur2;
    id_img1.src = "images/des" + valeur1 + ".jpg";
    id_img2.src = "images/des" + valeur2 + ".jpg";
    if (valeur1 == valeur2) {
        id_res.innerHTML = "gagné";
        id_res.style.color = "green";
    } else {
        id_res.innerHTML = "perdu";
        id_res.style.color = "red";
    }

}