"use strict"; // utilisation du mode strict (slide 51)

// console.log pour afficher les valeurs (slide 33)
// utilisation des commentaires (slide 36)
// utilisation des fonctions (slide 45)
function f1() {
  let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

  for (let i = 0; i < etudiants.length; i++) {               // utilisation d'une boucle (slide 44)
    console.log(etudiants[i]);
  }
}

function f2() {
  let etudiant = {
    nom: "John",
    prenom: "DOE",                //objet (slide 39)
    age: 30
  };

  console.log(etudiant);
}

function f3() {
  let tabEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },                      // utilisation d'un tableau (slide 38)
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  for (let i = 0; i < tabEtudiants.length; i++) {
    console.log(tabEtudiants[i].nom + "-" + tabEtudiants[i].prenom + "-" + tabEtudiants[i].age);
  }
}
