// Manipulation du DOM

// Sélectionner un élément par son ID
const elementById = document.getElementById("elementId");

// Sélectionner un élément par sa classe
const elementsByClass = document.getElementsByClassName("className");

// Sélectionner un élément par son nom de balise
const elementsByTag = document.getElementsByTagName("tagName");

// Sélectionner le premier élément correspondant à un sélecteur CSS
const firstElement = document.querySelector("selector");

// Sélectionner tous les éléments correspondant à un sélecteur CSS
const allElements = document.querySelectorAll("selector");

// Manipulation des classes CSS d'un élément
// Ajouter une classe à un élément
element.classList.add("className");

// Supprimer une classe d'un élément
element.classList.remove("className");

// Vérifier si un élément a une classe spécifique
const hasClass = element.classList.contains("className");

// Manipulation des attributs d'un élément
// Récupérer la valeur d'un attribut
const value = element.getAttribute("attribute");

// Définir la valeur d'un attribut
element.setAttribute("attribute", "value");

// Supprimer un attribut d'un élément
element.removeAttribute("attribute");

// Événements
// Ajouter un écouteur d'événement à un élément
element.addEventListener("event", function (event) {
  // Gestionnaire d'événement
});

// Supprimer un écouteur d'événement d'un élément
element.removeEventListener("event", eventHandler);

// Manipulation des styles CSS d'un élément
// Récupérer la valeur d'une propriété CSS
const propertyValue = element.style.property;

// Définir la valeur d'une propriété CSS
element.style.property = "value";

// Manipulation des tableaux
// Créer un nouveau tableau
const array = [];

// Ajouter un élément à la fin du tableau
array.push(element);

// Supprimer le dernier élément du tableau
const lastElement = array.pop();

// Ajouter un élément au début du tableau
array.unshift(element);

// Supprimer le premier élément du tableau
const firstElement = array.shift();

// Vérifier si un élément existe dans le tableau
const isInArray = array.includes(element);

// Obtenir l'index d'un élément dans le tableau
const index = array.indexOf(element);

// Supprimer un élément à un index spécifique
array.splice(index, 1);

// Manipulation des chaînes de caractères
// Concaténer des chaînes de caractères
const concatenatedString = string1 + string2;

// Obtenir la longueur d'une chaîne de caractères
const length = string.length;

// Extraire une sous-chaîne de caractères
const subString = string.slice(startIndex, endIndex);

// Remplacer une partie d'une chaîne de caractères
const newString = string.replace("oldValue", "newValue");

// Convertir une chaîne de caractères en minuscules
const lowerCaseString = string.toLowerCase();

// Convertir une chaîne de caractères en majuscules
const upperCaseString = string.toUpperCase();

// Structures de contrôle
// Condition "if"
if (condition) {
  // Bloc de code à exécuter si la condition est vraie
} else {
  // Bloc de code à exécuter si la condition est fausse
}

// Boucle "for"
for (let i = 0; i < array.length; i++) {
  // Bloc de code à exécuter à chaque itération
}

// Boucle "while"
while (condition) {
  // Bloc de code à exécuter tant que la condition est vraie
}

// Fonctions
// Déclaration d'une fonction
function functionName(parameter1, parameter2) {
  // Bloc de code à exécuter
  return result; // Facultatif, renvoie une valeur
}

// Appel d'une fonction
const result = functionName(argument1, argument2);

// Objets
// Créer un nouvel objet
const object = {};

// Ajouter une propriété à un objet
object.property = value;

// Accéder à la valeur d'une propriété d'un objet
const propertyValue = object.property;

// Modifier la valeur d'une propriété d'un objet
object.property = newValue;

// Supprimer une propriété d'un objet
delete object.property;

// Vérifier si une propriété existe dans un objet
const hasProperty = "property" in object;
