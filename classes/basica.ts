(() => {

    class Avenger {

        // private name: string = 'Scott';
        // public team: string;
        // public realName?: string;
        static avgAge:number = 35;
        static getAvgAge(){
            return this.name;
        }

        constructor(private name:string, 
                    private team: string, 
                    public realName?: string,
                    avgAge:number = 5
                ) {}
        public bio(){
            return `${ this.name } (${ this.team })`
        }
    }

    const antman : Avenger = new Avenger('Antman','Capitan');

    console.log( antman );
    console.log( antman.bio() );
    console.log( Avenger.getAvgAge() );

})()