"use strict";
const CONT = document.querySelector('.container');
class Lavoratore {
    constructor(coeffRedd, reddLordo, tasseInps, tasseIrpef) {
        this._coeffRedd = coeffRedd;
        this._reddLordo = reddLordo;
        this._tasseInps = tasseInps;
        this._tasseIrpef = tasseIrpef;
    }
    get codRedd() {
        return this._coeffRedd;
    }
    get reddLordo() {
        return this._reddLordo;
    }
    get tasseInps() {
        return this._tasseInps; // mi ritorna il 10 spec. nell'oggetto
    }
    get tasseIrpef() {
        return this._tasseIrpef;
    }
    // il coefficente di reddito fa variare le tasse IRPEF (reddito imponibile) in base al codice (quindi in base al settore lavorativo)
    // es. 20.000 euro lordi per un lav. attivita professionale 78%. 20.000 - 78% = 15.600 (cifra soggetta a tassazione)
    // questo metodo mi deve sempre ritornare il calcolo del lordo-tasse = netto
    calcNet() {
        return this.reddLordo - this.calcInpsTaxes(this.tasseInps) - this.calcIrpefTaxes(this.tasseIrpef);
    }
    calcInpsTaxes(cifra) {
        return (this.reddLordo * cifra) / 100; // cifra sara' il valore dell'input
    }
    calcIrpefTaxes(cifra) {
        return (this.reddLordo * cifra) / 100; // cifra sara' il valore dell'input
    }
}
class lavAutonomo extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd, reddito, tasseInps, tasseIrpef) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }
    calcNet() {
        return this.reddLordo - this.calcInpsTaxes(this.tasseInps) - this.calcIrpefTaxes(this.tasseIrpef);
    }
    calcInpsTaxes(cifra) {
        return (this.reddLordo * cifra) / 100; // cifra sara' il valore dell'input
    }
    calcIrpefTaxes(cifra) {
        return (this.reddLordo * cifra) / 100; // cifra sara' il valore dell'input
    }
}
class lavDipendente extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd, reddito, tasseInps, tasseIrpef) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }
    calcNet() {
        return this.reddLordo - this.calcInpsTaxes(this.tasseInps) - this.calcIrpefTaxes(this.tasseIrpef);
    }
    calcInpsTaxes(cifra) {
        return (this.reddLordo * cifra) / 100; // cifra sara' il valore dell'input
    }
    calcIrpefTaxes(cifra) {
        return (this.reddLordo * cifra) / 100; // cifra sara' il valore dell'input
    }
}
// Lavoratore Autonomo:
// - Tasse INPS: 0/48.279 (24%) - 48.279+ (25%);
// - Tasse IRPEF: 0/15.000 (23%) - 15.001/28.000 (27%) - 28.001/55.000 (38%)
// Lavoratore Dipendente:
// - Tasse INPS: 33%
// - Tasse IRPEF: 0/15.000 (23%) - 15.001/28.000 (27%) - 28.001/55.000 (38%) - 55.001/75.000 (41%) - 75.000+ (43%)
let lavAut1 = new lavDipendente(10, 38000, 24, 27);
let lavDip1 = new lavAutonomo(10, 62000, 33, 38);
console.log('Stipendio Netto Lavoratore Autonomo: ' + lavAut1.calcNet());
console.log('Stipendio Netto Lavoratore Dipendente: ' + lavDip1.calcNet());
