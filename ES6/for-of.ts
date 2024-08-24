(() => {

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman : Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    }

    const captainAmerica : Avenger = {
        name: 'Capitán América',
        weapon: 'Shield',
    }

    const thor : Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir',
    }


    const avenegres: Avenger[] = [ironman, captainAmerica, thor];


    for (const avenger of avenegres) {
        console.log(avenger.name, avenger.weapon);
    }


})()