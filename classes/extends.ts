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

        get fullName () {
            return `${ this.name } - ${ this.realName }`
        }
        set fullName (name: string){

            if(name.length < 3){
                throw new Error('El nombre debe de ser de más de 3 carácteres');
            }
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );
        }

    }

    // let wolverine: Xmen = new Xmen('Wolverine','Logan', true);

    // console.log( wolverine.fullName);

    // wolverine.fullName = 'yu';

    // console.log( wolverine.name );

    // wolverine.getFullNameDesdeXmen();

})()