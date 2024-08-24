(() => {
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder:number
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder:1500.123456
    }

    // const {poder, vision} = avengers;

    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvengers = ({ironman,...resto}:Avengers) =>  {
        console.log(ironman, resto);
    }

    printAvengers(avengers);


    const avengersArr: string[] = ['Cap. América','Ironman','Hulk'];

    const ironman = avengersArr[1];

    console.log({ironman});

    const [capi,ironman2,] = avengersArr;

    console.log({ironman2, capi});

})()