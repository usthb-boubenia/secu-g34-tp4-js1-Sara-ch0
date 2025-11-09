"use strict"; // (Slide 51) 

// Déclaration des variables (Slides 37 à 39) 
const prenom = "John";
const nom = "Doe";
const age = 15;
const note = 18.5;
const pi = 3.14;

//  Déclaration des fonctions (Slide 45) 

// f1() : afficher le nom
function f1() {
    console.log("Nom :", nom); // (Slide 33 : utilisation de console.log)
}

// f2() : afficher le prénom
function f2() {
    console.log("Prénom :", prenom); // (Slide 33 : console.log)
}

// f3() : afficher nom et prénom
function f3() {
    console.log("Nom & Prénom :", prenom + " " + nom); // (Slide 41 : concaténation)
}

// f4() : afficher l'âge
function f4() {
    console.log("Âge :", age); // (Slide 33 : console.log)
}

// f5() : afficher la note
function f5() {
    console.log("Note :", note); // (Slide 33 : console.log)
}

// f6() : afficher la valeur de π
function f6() {
    console.log("Valeur de π :", pi); // (Slide 33 : console.log)
}

//  Attacher les événements aux boutons (Slides 128-133 : événements) 
// (Slide 59 : getElementById pour retrouver un élément HTML)
document.getElementById("btnNom").onclick = f1;
document.getElementById("btnPrenom").onclick = f2;
document.getElementById("btnNomPrenom").onclick = f3;
document.getElementById("btnAge").onclick = f4;
document.getElementById("btnNote").onclick = f5;
document.getElementById("btnPi").onclick = f6;