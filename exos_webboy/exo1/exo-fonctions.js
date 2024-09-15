function lireDom() {
    //  let mon_doc = document.body;
    //console.log(mon_doc.innerHTML);
    let titre2 = document.getElementById("titre2");
    console.log("id titre2:" + titre2.innerHTML);
    let titres = document.getElementsByClassName("titre");
    console.log("nombre de balises avec la classe titre:" + titres.length);
    console.log("class titre:");
    for (let titre of titres) {
        console.log("." + titre.innerHTML);
    }
    let ensemble_li = document.querySelectorAll("li");
    console.log("tous les li:");
    for (let li of ensemble_li) {
        console.log("." + li.innerHTML);
    }
    // Your code to read and manipulate the DOM here
}
function modifDom() {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Bienvenue";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Exo JS";
    let paragraphe = document.getElementsByClassName("paragraphe");
    paragraphe[0].innerHTML = "Voici quelques fonctions exécutées en javascript";
    let ensemble_li = document.querySelectorAll("li");
    for (let i = 0; i < ensemble_li.length; i++) {
        ensemble_li[i].innerHTML = "Liste " + i + 1;
    }
}
function modifStyle(){
    let h1 = document.querySelector("h1");
    h1.style.textAlign= "center"; 
    let titres = document.getElementsByClassName("titre");
    for(let titre of titres)
        titre.style.color="red";
    let paragraphe = document.getElementsByClassName("paragraphe");
    paragraphe[0].style.border="1px solid green";
    paragraphe[0].style.padding="10px";
}