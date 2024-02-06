"use strict";
import { Country } from "./Country.js";

export class Game {
  #countryArray = [];
  #countryIndex;
  #currentCountry;
  #countries;
  displayFlag;
  reponse;
  static #score = 0;

  constructor(
    score,
    countryArray,
    countryIndex,
    currentCountry,
    countries,
    displayFlag
  ) {
    this.#countryArray = countryArray;
    this.#countryIndex = countryIndex;
    this.#countries = countries;
    this.#currentCountry = new Country(this.#countries[this.#countryIndex]);
    this.displayFlag = Country.displayFlag();
    this.reponse = Country.verifieReponse();
    //this.#score = score;
  }
  get score() {
    return this.score;
  }
  updateScore() {
    if ((this.reponse = false)) {
      Game.#score--;
    } else {
      Game.#score++;
    }
    const body = document.querySelector("body");
    body.innerHTML = "";
    const aside = document.getElementById("score");
    const h1 = document.querySelector("h1");
    h1.textContent = `Score: ${Game.#score}`;
    aside.appendChild(h1);
    return aside;
  }
  verifyIndex() {
    if (this.#countryIndex >= this.#countryArray.length) {
      console.log(
        "tous les pays ont été affichés et la partie est donc terminée"
      );
      return true;
    } else {
      return false;
    }
  }
  nextCountry() {
    const pays = this.currentCountry;
    const etatpartie = verifyIndex();
    if (etatpartie === true) {
    } else if (etatpartie === false) {
      console.log("le jeu n'est pas terminé");
      this.#countryIndex++;
      pays = new Country(this.#countryIndex);
    }
  }
}


    
/**-
 *  Gère l'état du jeu, y compris le score et l'indice du pays actuel.
- Contrôle le déroulement du jeu, comme le passage au pays suivant et la vérification de la fin du jeu.
- Initialise et affiche le pays courant en utilisant la classe `Country`. */

/**Crée des instances de la classe Country de Country.js. */
