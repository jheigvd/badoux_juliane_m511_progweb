"use strict";

// Ce fichier initialise le jeu et contrôle le flux principal des interactions.

import { Game } from "./modules/Game.js";
import { shuffle } from "lodash";
import { countries } from "./data.js";

/** 
 * - Récupère et mélange les données des pays à partir d'une API externe.
- Initialise l'objet `Game` avec les pays mélangés.
- Gère les interactions utilisateur via un Event Listener pour la soumission du formulaire.
- Met à jour et affiche les scores et les meilleurs scores. */

/**- Utilise la classe `Game` de `Game.js`.
- Manipule directement le DOM pour afficher les scores et les meilleurs scores.
- Lance des appels API pour récupérer les données des pays. */

// 1e essais plus poussé mais ne fonctionne pas.

const tableauPaysSet = new Set();

const getCountry = async (country) => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    const { countries } = data;

    processDatas(countries);
  } catch (error) {
    console.error("Erreur lors de la récupération des pays:", error.message);
  }
};

const cleanData = (countries) => {
  return countries.map((element) => {
    return {
      data: element,
      common: element.name.common,
      official: element.name.official,
      translations: element.translations,
      flag: element.flag,
    };
  });
};

const processDatas = async (results) => {
  try {
    const cleanedData = cleanData(results);
    const countriesPromises = cleanedData.map(async (element) => {
      // const tableauReponsesPays = renderCountry();

      return new Country({
        data: element,
        common: element.common,
        official: element.official,
        translations: element.translations,
        flag: element.flag,
      });
    });

    (await Promise.all(countriesPromises)).forEach((user) => {
      tableauPaysSet.add(user);
    });
    console.log("Pays crées:", tableauPaysSet);

    shuffleCountry();
  } catch (error) {
    console.error("Erreur lors du traitement des pays:", error.message);
  }
};

const renderCountry = (country) => {
  // const mainElement = document.querySelector("main");
  // mainElement.innerHTML = "";
  country.forEach((country) => {
    country.render();
  });
};

const shuffleCountry = (country) => {
  const tableauPaysArray = Array.from(tableauPaysSet);
  tableauPaysArray.shuffle(country);
  renderCountry(tableauPaysArray);
};

const afficherDonneedansConsole = () => {
  console.log();
};

getCountry();

// Deuxième essais sans async await
// const tableau = [];

// const getDatas = () => {
//   const countries = fetch("https://restcountries.com/v3.1/all").then(
//     (resutlat) => resutlat.json()
//   );
//   countries.then((data) => {
//     const { results } = data;

//     results.forEach((element) => {
//       tableau.push(
//         new Country(
//           element,
//           element.common,
//           element.official,
//           element.translations,
//           element.flag
//         )
//       );
//     });
//     const tableauShuffle = tableau.shuffle();
//     tableauShuffle.forEach((element) => {
//       element.render();
//     });
//   });
// };

// getDatas();


// Essais 3
// const tableauPays = [];

// const getPays = async () => {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/all");

//     if (!response.ok) {
//       throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
//     }
//     const data = await response.json();
//     const { results } = data;

//     processUsersData(results);
//   } catch (error) {
//     console.error("Erreur lors de la récupération des pays:", error.message);
//   }
// };
// const processUsersData = async (results) => {
//   try {
//     const paysPromises = results.map(async (element) => {
//       return new Country(
//         element.common,
//         element.official,
//         element.translations,
//         element.flag;
//       );
//     });


//     tableauPays.push(...(await Promise.all(paysPromises)));
//     console.log("Users created:", tableauPays); 

//     renderCountry(); 
//   } catch (error) {
//     console.error("Erreur lors du traitement des utilisateurs:", error.message);
//   }
// };

// const renderCountry = () => {
//   const mainElement = document.querySelector("main");
//   mainElement.innerHTML = ""; // vider le contenu de l'élément main
//   tableauPays.forEach((element) => {
//     // itérer à travers chaque utilisateur
//     element.render(); // afficher l'utilisateur dans l'interface utilisateur
//     // render() est une méthode (crée dans le code) de la classe User qui ajoute l'élément utilisateur à l'élément main
//   });
// };