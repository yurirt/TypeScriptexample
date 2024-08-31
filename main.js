"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 5) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map