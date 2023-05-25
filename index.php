<?php

// VARIABLES ET TYPES DE DONNÉES

// Chaînes de caractères
$nom = "John Doe";
$phrase = 'Je suis une phrase.';

// Entiers
$age = 25;

// Flottants (nombres à virgule)
$salaire = 1500.50;

// Booléens (vrai/faux)
$estActif = true;

// Tableaux
$langages = array("PHP", "JavaScript", "HTML", "CSS");

// STRUCTURES DE CONTRÔLE

// Condition if-else
if ($age >= 18) {
    echo "Majeur";
} else {
    echo "Mineur";
}

// Boucle for
for ($i = 0; $i < 5; $i++) {
    echo $i; // Affiche les chiffres de 0 à 4
}

// Boucle while
$i = 0;
while ($i < 5) {
    echo $i; // Affiche les chiffres de 0 à 4
    $i++;
}

// FONCTIONS

// Déclaration d'une fonction
function addition($a, $b) {
    return $a + $b;
}

// Appel de la fonction
$resultat = addition(3, 4); // $resultat contient 7
echo $resultat;

// TABLEAUX

// Parcours d'un tableau avec foreach
foreach ($langages as $langage) {
    echo $langage; // Affiche chaque élément du tableau $langages
}

// Ajout d'un élément à un tableau
$langages[] = "Python";

// Suppression d'un élément d'un tableau
unset($langages[2]);

// GESTION DES ERREURS

// Gestion des erreurs avec try-catch
try {
    // Code susceptible de générer une exception
} catch (Exception $e) {
    echo "Une erreur s'est produite : " . $e->getMessage();
}

// GESTION DES FICHIERS

// Ouverture d'un fichier en lecture
$monFichier = fopen("exemple.txt", "r");

// Lecture du contenu du fichier
while (!feof($monFichier)) {
    $ligne = fgets($monFichier);
    echo $ligne;
}

// Fermeture du fichier
fclose($monFichier);

// BASES DE DONNÉES

// Connexion à une base de données MySQL
$bdd = new PDO('mysql:host=localhost;dbname=ma_base;charset=utf8', 'nom_utilisateur', 'mot_de_passe');

// Requête SQL
$requete = $bdd->prepare("SELECT * FROM utilisateurs WHERE id = :id");

// Exécution de la requête avec des paramètres
$requete->execute(array('id' => 1));

// Récupération des résultats
$resultat = $requete->fetch();

// Fermeture de la connexion à la base de données
$bdd = null;

// GESTION DES SESSIONS

// Démarrage de la session
session_start();

// Stockage d'une valeur dans la session
$_SESSION['utilisateur'] = 'John Doe';

// Récupération d'une valeur depuis la session
$utilisateur = $_SESSION['utilisateur'];

// Suppression d'une valeur de la session
unset($_SESSION['utilisateur']);

// Fermeture de la session
session_destroy();

// GESTION DES COOKIES

// Stockage d'un cookie
setcookie('nom', 'John Doe', time() + 3600);

// Récupération d'un cookie
$nom = $_COOKIE['nom'];

// Suppression d'un cookie
setcookie('nom', '', time() - 3600);

?>
