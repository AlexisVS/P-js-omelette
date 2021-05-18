export class Personne {
    constructor(nom, lieu, argent) {
        this.nom = nom,
            this.lieu = lieu,
            this.argent = argent,
            this.mainDroite = [],
            this.mainGauche = []
    }
    seDeplacer = (lieu) => {
        this.lieu = lieu
        return console.log(this.nom + " est actuellement à la " + this.lieu);
    }
    payerArticle = (magasin) => {
        this.mainDroite[0].contenu.forEach(element => {
            this.argent -= element.prix
            magasin.caisse += element.prix
            console.log(`Je viens de payer mon ${element.nom} a ${element.prix} €`);
        });
        return console.log(`Il me reste des à présent que ${this.argent} €`);
    }
    couper = (bol, outil) => {
        bol.contenu.forEach((e) => {
            if (e.etat == "entier") {
                console.log(`Le ${e.nom} est ${e.etat}`);
                e.etat = outil.action
                console.log(`Le ${e.nom} est ${e.etat}`);
            }
        })
    }
}

export class Ingredient {
    constructor(nom, etat, prix) {
        this.nom = nom,
            this.etat = etat,
            this.prix = prix
    }

}