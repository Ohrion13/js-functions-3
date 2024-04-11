// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");

function getCamelCase(text) {

    const words = text.split(' ');

    let camelCase = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return camelCase;
}

console.log(getCamelCase("de l'ordre nait le chaos et du chaos  naît l'ordre"));


// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");

function getBiggestWord(text) {

    const words = text.split(' ');
    let biggestWord = "";

    for (let i = 0; i < words.length; i++) {

        if (words[i].length > biggestWord.length) {
            biggestWord = words[i];
        }
    }

    return biggestWord;
}

console.log(getBiggestWord("quand le corps se réveille, l'Esprit se rappelle ce qu'il a appris"));


// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");


function convertSeconds(seconds) {
    
    const durations = [];

    durations.push(`${seconds % 60} secondes`);
     
    seconds = Math.floor(seconds / 60);
    durations.push(`${seconds % 60} minutes`);

    seconds = Math.floor(seconds / 60);
    durations.push(`${seconds % 24} heures`);

    seconds = Math.floor(seconds / 24);
      durations.push(`${seconds % 7} jours`);

    seconds = Math.floor(seconds / 7);
    durations.push(`${seconds % 52} mois`);

    seconds = Math.floor(seconds / 52);
    durations.push(`${seconds / 52} années`);


    return durations.reverse()
}

console.log(convertSeconds(1234567));
console.log(convertSeconds(12345));


// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

console.log();

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();