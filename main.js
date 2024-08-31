"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 5) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor xMen llamado');
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    let wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
})();
//# sourceMappingURL=main.js.map