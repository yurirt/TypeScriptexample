"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superMan = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = 'Sin Nombre';
            this.realName = 'Sin Nombre real';
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAdress() {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addTwoNumbersFuction;
    addTwoNumbersFuction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map