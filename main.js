"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123456
    };
    const printAvengers = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvengers(avengers);
    const avengersArr = ['Cap. América', 'Ironman', 'Hulk'];
    const ironman = avengersArr[1];
    console.log({ ironman });
    const [capi, ironman2,] = avengersArr;
    console.log({ ironman2, capi });
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const captainAmerica = {
        name: 'Capitán América',
        weapon: 'Shield',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avenegres = [ironman, captainAmerica, thor];
    for (const avenger of avenegres) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const nombre = 'Yuri';
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map