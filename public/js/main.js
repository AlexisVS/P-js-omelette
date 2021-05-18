import { bol, couteau, epicerie, poele } from "./modules/variables.js";
import { Ingredient, Personne } from "./modules/class.js";
import {  } from "./modules/functions.js";


let oignon = new Ingredient("oignon","entier", 5);
let oeuf = new Ingredient("oeuf","entier", 4);
let epice = new Ingredient("epice", "moulu", 3);
let fromage = new Ingredient("fromage", "entier", 2);
epicerie.ingredients.push(oignon,oeuf,epice,fromage)

let personnage = new Personne("Alexis","",1000);

personnage.seDeplacer("maison");

//va a l'épicerie
personnage.seDeplacer("epicerie");

//prend un panier
personnage.mainDroite.push(epicerie.paniers[0])
epicerie.paniers.splice(0,1)
console.log("Je prend le panier");

// je prend une fois chaque element de l'épicerie
epicerie.ingredients.forEach((e) => {
    personnage.mainDroite[0].contenu.push(e)
    console.log(`J'ai récuperé un ${e.nom}`);
})

// Je paye encore et toujours
personnage.payerArticle(epicerie);

// je rentre chez moi

personnage.seDeplacer("maison");

// Je met les ingrédients dans le bol
personnage.mainDroite[0].contenu.forEach( (e) => {
    bol.contenu.push(e)
    console.log(`Je place un ${e.nom} dans le bol`);
})
personnage.mainDroite[0].contenu = [];

// Je part à l'épicerie

personnage.seDeplacer("epicerie");

//Je dépose le panier
epicerie.paniers.push(personnage.mainDroite[0])
personnage.mainDroite = [];
console.log('Panier déposé');

// je repart à la maison

personnage.seDeplacer("maison")
console.log(`${personnage.nom} retourne à la maison pour continuer l'omelette`);

// Je vérifie chaque ingrédients contenu dans le bol et je l'ai coupe seulement si ils sont entier

personnage.couper(bol, couteau)
console.log('Tous mes ingrédients entier ont été coupé');

// Je mélange le contenu du bol
bol.melanger("omelette")
console.log(bol);
console.log('Mon omelette est prête à être cuite');

// Je vide le contenu du bol dans la poele
poele.contenu.push(bol.contenu)
bol.contenu = []


// Je cuit l'omelette
poele.cuir()
console.log(poele.contenu[0].etat);

// Dire que notre omelette est cuite

console.log("Notre omelette est cuite");