"use strict"; // utilisation du mode strict (slide 51)

let Students = [
  { id: 1000, prenom: "JOHN", nom: "DOE", val1: 14, val2: 5 },
  { id: 2000, prenom: "BOB", nom: "CARLTON", val1: 7, val2: 1 },       // utilisation d'un tableau (slide 38)
  { id: 3000, prenom: "RAYANE", nom: "SMITH", val1: 13, val2: 3 }
];

// utilisation des fonctions (slide 45)
// utilisation des commentaires (slide 36)

function B(x) {
  if (x >= 10) {
    return true;                   //condition if/else (slide 42)
  } else {                        //boolean values (slide 37)
    return false;
  }
}


function A() {
  for (let i = 0; i < Students.length; i++) {    // utilisation d'une boucle (slide 44)
s
    // Appel de B() pour vérifier la réussite
    let resultat = B(Students[i].val1);

    // Affichage du résultat dans la console (slide 33)
    if (resultat) {
      console.log(Students[i].id + ": ADMIS");
    } else {
      console.log(Students[i].id + ": AJOURNÉ");
    }
  }
}
