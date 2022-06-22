const CONT = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
    // al caricamento della pagina creo gli elementi dinamicamente

    /* =============== Div Lav. Autonomo =============== */

    let autDiv = document.createElement('div');
    autDiv.className = 'autDiv';

    let lordoAut = document.createElement('p');
    lordoAut.id = 'lordoAut';
    lordoAut.innerHTML = `Lavoratore Autonomo - Reddito Lordo: ${lavAut1.reddLordo} Euro`;

    let inpsAut = document.createElement('p');
    inpsAut.id = 'inpsAut';
    inpsAut.innerHTML = `Tasse INPS: ${lavAut1.tasseInps}%`;

    let irpefAut = document.createElement('p');
    irpefAut.id = 'irpefAut';
    irpefAut.innerHTML = `Tasse Irpef: ${lavAut1.tasseIrpef}%`;

    let nettoAut = document.createElement('p');
    nettoAut.id = 'nettoAut';
    nettoAut.innerHTML = `Reddito Netto: ${lavAut1.calcNet()} Euro`;

    /* =============== Div Lav. Dipendente =============== */

    let dipDiv = document.createElement('div');
    dipDiv.className = 'dipDiv';

    let lordoDip = document.createElement('p');
    lordoDip.id = 'lordoDip';
    lordoDip.innerHTML = `Lavoratore Dipendente - Reddito Lordo: ${lavDip1.reddLordo} Euro`;

    let inpsDip = document.createElement('p');
    inpsDip.id = 'inpsDip';
    inpsDip.innerHTML = `Tasse INPS: ${lavDip1.tasseInps}%`;

    let irpefDip = document.createElement('p');
    irpefDip.id = 'irpefDip';
    irpefDip.innerHTML = `Tasse Irpef: ${lavDip1.tasseIrpef}%`;

    let nettoDip = document.createElement('p');
    nettoDip.id = 'nettoDip';
    nettoDip.innerHTML = `Reddito Netto: ${lavDip1.calcNet()} Euro`;

    /* ---------------------------------------- */

    CONT?.append(autDiv, dipDiv);
    autDiv?.append(lordoAut, inpsAut, irpefAut, nettoAut);
    dipDiv?.append(lordoDip, inpsDip, irpefDip, nettoDip);

});

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
        return this._tasseInps; // mi ritorna il 10 spec. nell'oggetto
    }
    get tasseIrpef() {
        return this._tasseIrpef;
    }

    // DA AGGIUNGERE coefficente di reddito
    // il coefficente di reddito fa variare le tasse IRPEF (reddito imponibile) in base al codice (quindi in base al settore lavorativo)
    // es. 20.000 euro lordi per un lav. attivita professionale (solo il 78% di 20.000 viene tassato). --> 20.000 - 78% = 15.600 (cifra soggetta a tassazione)

    // questo metodo mi deve sempre ritornare il calcolo del lordo-tasse = netto
    calcNet(): number {
        return this.reddLordo - this.calcInpsTaxes(this.tasseInps) - this.calcIrpefTaxes(this.tasseIrpef);
    }

    calcInpsTaxes(cifra: number): number {
        return (this.reddLordo * cifra)/100; // cifra sara' il valore dell'input
    }

    calcIrpefTaxes(cifra: number): number {
        return (this.reddLordo * cifra)/100; // cifra sara' il valore dell'input
    }
}

class lavAutonomo extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd: number, reddito: number, tasseInps: number, tasseIrpef: number) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }

    calcNet(): number {
        return this.reddLordo - this.calcInpsTaxes(this.tasseInps) - this.calcIrpefTaxes(this.tasseIrpef);
    }

    calcInpsTaxes(cifra: number): number {
        return (this.reddLordo * cifra)/100; // cifra sara' il valore dell'input
    }

    calcIrpefTaxes(cifra: number): number {
        return (this.reddLordo * cifra)/100; // cifra sara' il valore dell'input
    }
}

class lavDipendente extends Lavoratore {
    // eventuali proprieta' uniche le dichiaro qui
    constructor(coeffRedd: number, reddito: number, tasseInps: number, tasseIrpef: number) {
        super(coeffRedd, reddito, tasseInps, tasseIrpef);
        // eventuali proprieta' uniche le aggiungo qui
    }

    calcNet(): number {
        return this.reddLordo - this.calcInpsTaxes(this.tasseInps) - this.calcIrpefTaxes(this.tasseIrpef);
    }

    calcInpsTaxes(cifra: number): number {
        return (this.reddLordo * cifra)/100; // cifra sara' il valore dell'input
    }

    calcIrpefTaxes(cifra: number): number {
        return (this.reddLordo * cifra)/100; // cifra sara' il valore dell'input
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