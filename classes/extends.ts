(() =>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string,

        ){
            console.log('Constructor Avenger llamado')      
        }

        protected getFullName() {
            return `${ this.name} ${this.realName}`
        }
    }    

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
            console.log('Constructor xMen llamado');
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );
        }

    }

    let wolverine: Xmen = new Xmen('Wolverine','Logan', true);

    console.log( wolverine );

    wolverine.getFullNameDesdeXmen();

})()