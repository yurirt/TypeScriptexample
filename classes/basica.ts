(() => {

    class Avenger {

        // private name: string = 'Scott';
        // public team: string;
        // public realName?: string;
        static avgAge:number = 35;

        constructor(private name:string, 
                    private team: string, 
                    public realName?: string,
                    avgAge:number = 5
                ) {
                    Avenger.avgAge = avgAge;
                }
    }

    const antman : Avenger = new Avenger('Antman','Capitan');

    console.log( antman );
    console.log( Avenger.avgAge );

})()