const CONT = document.querySelector('.container');

abstract class Lavoratore {
    private _coeffRedd: number;
    private _reddLordo: number;
    private _tasseInps: number;
    private _tasseIrpef: number;

    constructor(coeffRedd: number, reddLordo: number, tasseInps: number, tasseIrpef: number) {
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
    calcNet(): number {
        return this.reddLordo - this.tasseInps - this.tasseIrpef;
    }
}

class lavAutonomo extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd: number, reddito: number, tasseInps: number, tasseIrpef: number) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }

    calcNet(): number {
        return this.reddLordo - this.tasseInps - this.tasseIrpef;
    }
}

class lavDipendente extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd: number, reddito: number, tasseInps: number, tasseIrpef: number) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }

    calcNet(): number {
        return this.reddLordo - this.tasseInps - this.tasseIrpef;
    }
}

let lavAut1 = new lavDipendente(10, 18000, 1000, 1000);
console.log('Stipendio Netto Lavoratore Autonomo: ' + lavAut1.calcNet());

let lavDip1 = new lavAutonomo(10, 22000, 1000, 1000);
console.log('Stipendio Netto Lavoratore Dipendente: ' + lavDip1.calcNet());
