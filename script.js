/*************************
 * Variables et Types de données
 *************************/

// Déclaration de variables
var x; // Déclaration d'une variable sans valeur initiale
var y = 5; // Déclaration d'une variable avec une valeur initiale

// Types de données
var number = 5; // Nombre
var string = "Hello"; // Chaîne de caractères
var boolean = true; // Booléen (true/false)
var array = [1, 2, 3]; // Tableau
var object = { key: "value" }; // Objet

/*************************
 * Opérations et Opérateurs
 *************************/

// Opérations mathématiques
var addition = 2 + 3;
var soustraction = 5 - 2;
var multiplication = 3 * 4;
var division = 10 / 2;
var modulo = 7 % 3;

// Opérateurs de comparaison
var egalite = 5 == "5"; // Vérifie l'égalité des valeurs (true)
var egaliteStricte = 5 === "5"; // Vérifie l'égalité des valeurs et des types (false)
var difference = 5 != "5"; // Vérifie la différence des valeurs (false)
var differenceStricte = 5 !== "5"; // Vérifie la différence des valeurs et des types (true)
var superieur = 5 > 3;
var inferieur = 5 < 3;
var superieurOuEgal = 5 >= 3;
var inferieurOuEgal = 5 <= 3;

// Opérateurs logiques
var et = true && false; // ET logique (false)
var ou = true || false; // OU logique (true)
var non = !true; // NON logique (false)

/*************************
 * Structures de contrôle
 *************************/

// Conditions
if (condition) {
  // Bloc de code exécuté si la condition est vraie
} else if (autreCondition) {
  // Bloc de code exécuté si une autre condition est vraie
} else {
  // Bloc de code exécuté si aucune condition n'est vraie
}

// Boucle for
for (var i = 0; i < 5; i++) {
  // Bloc de code exécuté tant que la condition est vraie
}

// Boucle while
while (condition) {
  // Bloc de code exécuté tant que la condition est vraie
}

// Boucle do-while
do {
  // Bloc de code exécuté au moins une fois, puis tant que la condition est vraie
} while (condition);

/*************************
 * Fonctions
 *************************/

// Déclaration d'une fonction
function nomDeLaFonction(parametre1, parametre2) {
  // Bloc de code exécuté lorsque la fonction est appelée
}

// Appel d'une fonction
nomDeLaFonction(arg1, arg2);

// Fonction avec retour de valeur
function fonctionAvecRetour() {
  return valeur;
}

// Utilisation de fonctions prédéfinies
var longueur = "Hello".length; // Retourne la longueur de la chaîne de caractères

/*************************
 * Manipulation du DOM
 *************************/

// Sélection d'éléments
var element = document.getElementById("id"); // Sélectionne un élément par son ID
var elements = document.getElementsByClassName("classe"); // Sélectionne des éléments par leur classe
var elements = document.getElementsByTagName("tag"); // Sélectionne des éléments par leur balise

// Modification de contenu
element.innerHTML = "Nouveau contenu"; // Modifie le contenu HTML d'un élément
element.textContent = "Nouveau contenu"; // Modifie le texte d'un élément

// Ajout/Suppression de classes
element.classList.add("classe"); // Ajoute une classe à un élément
element.classList.remove("classe"); // Supprime une classe d'un élément

// Événements
element.addEventListener("click", function () {
  // Fonction exécutée lors du clic sur l'élément
});

/*************************
 * Manipulation de tableaux
 *************************/

// Création d'un tableau
var tableau = [];

// Ajout d'éléments à un tableau
tableau.push(element); // Ajoute un élément à la fin du tableau

// Accès aux éléments d'un tableau
var premierElement = tableau[0]; // Accède au premier élément du tableau

// Parcours d'un tableau
for (var i = 0; i < tableau.length; i++) {
  var element = tableau[i];
  // Faire quelque chose avec l'élément
}

/*************************
 * Manipulation d'objets
 *************************/

// Création d'un objet
var objet = {};

// Ajout de propriétés à un objet
objet.propriete = valeur;

// Accès aux propriétés d'un objet
var valeur = objet.propriete;

/*************************
 * Gestion des erreurs
 *************************/

try {
  // Bloc de code susceptible de générer une erreur
} catch (erreur) {
  // Bloc de code exécuté en cas d'erreur
}

/*************************
 * Requêtes HTTP (AJAX)
 *************************/

// Envoi d'une requête GET
var xhr = new XMLHttpRequest();
xhr.open("GET", "url", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var reponse = xhr.responseText;
    // Faire quelque chose avec la réponse
  }
};
xhr.send();

// Envoi d'une requête POST
var xhr = new XMLHttpRequest();
xhr.open("POST", "url", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var reponse = xhr.responseText;
    // Faire quelque chose avec la réponse
  }
};
xhr.send(JSON.stringify(data));
