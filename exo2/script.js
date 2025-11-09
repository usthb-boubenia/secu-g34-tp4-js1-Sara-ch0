"use strict"; // (Slide 51 : Mode Strict - Bonnes pratiques)

/**
 * Fonction f1(): Crée et affiche un tableau d'étudiants (simplement des chaînes).
 * Attendue dans la console: Etudiant1, Etudiant2, Etudiant3
 */
// (Slide 45 : Déclaration de fonction)
function f1() {
    // (Slide 38 : Déclaration d'un tableau simple - Array)
    const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; 

    // (Slide 33 : Sortie console.log())
    console.log("--- Exécution de f1() : Tableau Etudiants ---");

    // Utilisation d'une boucle pour parcourir le tableau
    // (Slide 44 : Boucle 'for' pour itération sur tableau)
    for (let i = 0; i < tableauEtudiants.length; i++) { 
        console.log(tableauEtudiants[i]);
    }
}


/**
 * Fonction f2(): Crée et affiche un objet étudiant.
 * Attendue dans la console: {nom: 'John', prenom: 'DOE', age: 30}
 */
// (Slide 45 : Déclaration de fonction)
function f2() {
    // (Slide 39 : Déclaration d'un objet littéral - Object)
    const objetEtudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    // (Slide 33 : Sortie console.log())
    console.log("--- Exécution de f2() : Objet Etudiant ---");
    console.log(objetEtudiant); // Affiche l'objet tel quel
}


/**
 * Fonction f3(): Crée et affiche un tableau d'objets étudiants, formaté.
 * Attendue dans la console (format nom-prenom-age): nom1-prenom1-21, nom2-prenom2-22, nom3-prenom3-23
 */
// (Slide 45 : Déclaration de fonction)
function f3() {
    // (Slide 40 : Déclaration d'un tableau d'objets - Array of Objects)
    const tableauObjetsEtudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // (Slide 33 : Sortie console.log())
    console.log("--- Exécution de f3() : Tableau d'objets Etudiants ---");

    // Parcours du tableau d'objets et affichage 
    // (Slide 44 : Boucle 'for' pour itération sur tableau d'objets)
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) {
        const etudiant = tableauObjetsEtudiants[i];
        // (Slide 41 : Template Literals ES6+)
        const resultat = `${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`; 
        console.log(resultat);
    }
}