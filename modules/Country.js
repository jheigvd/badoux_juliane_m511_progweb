"use strict";
//  représentant le modèle de données et la présentation d'un pays individuel.
export class Country {
  #dataForOneCountry;
  #tableauReponsesPays;
  #common;
  #official;
  #translations;
  #flag;

  constructor(options) {
    const { dataForOneCountry, common, offical, translations, flag } = options;
    this.#dataForOneCountry = dataForOneCountry;
    this.#tableauReponsesPays = this.#genererStructureDonneesCorrectes(
      this.#translations
    );
    this.#common = common;
    this.#official = offical;
    this.#translations = translations;
    this.#flag = flag;
  }

  get dataForOneCountry() {
    return this.#dataForOneCountry;
  }
  get tableauReponsesPays() {
    return this.#tableauReponsesPays;
  }
  get common() {
    return this.#common;
  }
  get official() {
    return this.#official;
  }
  get translations() {
    return this.#translations;
  }
  get flag() {
    return this.#flag;
  }

  #genererStructureDonneesCorrectes(translations) {
    // les bonnes réponses sont dans common
    const tableau = new Set(Object.values(translations));
    const reponsesCorrectes = tableau.map().toLowerCase();
    console.log(reponsesCorrectes);
    return reponsesCorrectes;
  }

  verifieReponse(inputValue) {
    if (reponsesCorrectes.has(inputValue.toLowerCase())) {
      console.log("La chaine est incluse");
      return true;
    } else {
      console.log("La chaine n'est pas incluse");
      return false;
    }
  }
  displayFlag() {
    const div = document.createElement("div");
    div.id("flag");
    const html = `<h1>${this.flag}</h1>`;
    div.insertAdjacentHTML("afterbegin", html);
    return div;
  }
}

/**
 * - Contient des données spécifiques au pays, telles que le drapeau et les réponses valides (dérivées des noms de pays dans différentes langues).
- Fournit une méthode pour vérifier si une réponse donnée est correcte.
- Gère l'affichage du drapeau du pays dans l'interface utilisateur. */
