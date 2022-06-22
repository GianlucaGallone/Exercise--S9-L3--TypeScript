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
        return this._tasseInps;
    }
    get tasseIrpef() {
        return this._tasseIrpef;
    }
    // questo metodo mi deve sempre ritornare il calcolo del lordo-tasse = netto
    calcNet() {
        return this.reddLordo - this.tasseInps - this.tasseIrpef;
    }
}
class lavAutonomo extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd, reddito, tasseInps, tasseIrpef) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }
    calcNet() {
        return this.reddLordo - this.tasseInps - this.tasseIrpef;
    }
}
class lavDipendente extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd, reddito, tasseInps, tasseIrpef) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }
    calcNet() {
        return this.reddLordo - this.tasseInps - this.tasseIrpef;
    }
}
let lavAut1 = new lavDipendente(10, 18000, 1000, 1000);
console.log('Stipendio Netto Lavoratore Autonomo: ' + lavAut1.calcNet());
let lavDip1 = new lavAutonomo(10, 22000, 1000, 1000);
console.log('Stipendio Netto Lavoratore Dipendente: ' + lavDip1.calcNet());
