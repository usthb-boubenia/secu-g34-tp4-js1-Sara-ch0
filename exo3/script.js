"use strict"; // (Slide 51 : Mode Strict - Bonnes pratiques)

/**
 * Fonction B (calculateStatus): Calcule la note finale et le statut d'un étudiant.
 * @param {Object} student - L'objet étudiant à traiter.
 * @returns {string} - La ligne de résultat formatée.
 */
// (Slide 45 : Déclaration de fonction avec paramètre)
function calculateStatus(student) {
    // Calcul de la note finale (Note + Bonus)
    // (Slide 41 : Opérateurs arithmétiques)
    const finalNote = student.note + student.bonus; 

    let status;
    // (Slide 42 : Structure conditionnelle if/else)
    if (finalNote >= 10) { 
        status = "Admis";
    } else {
        status = "Ajourné";
    }

    // Retourne le string formaté comme ligne de délibération
    // (Slide 41 : Template Literals ES6+)
    return `${student.id} - ${student.nom} ${student.prenom} - Note Finale: ${finalNote}/20 - Statut: ${status}`;
}


/**
 * Fonction A (deliberation): Gère le processus de délibération.
 * Fonction appelée par le bouton.
 */
// (Slide 45 : Déclaration de fonction)
function deliberation() {
    // Données Students (Slide 40 : Tableau d'objets)
    const Students = [
        { id: 1000, prenom: "JOHN", nom: "DOE", note: 14, bonus: 5 },
        { id: 2000, prenom: "BOB", nom: "CARLTON", note: 7, bonus: 1 },
        { id: 3000, prenom: "RAYANE", nom: "SMITH", note: 13, bonus: 3 }
    ];

    // (Slide 33 : Sortie console.log())
    console.log("--- Lancement de la délibération ---");

    // Parcours du tableau et appel de la fonction B pour chaque étudiant
    // (Slide 44 : Boucle forEach pour parcourir un tableau)
    Students.forEach(student => { 
        // Appel de la fonction B (calculateStatus)
        const resultLine = calculateStatus(student); 
        console.log(resultLine); 
    });

    console.log("--- Délibération terminée ---");
}