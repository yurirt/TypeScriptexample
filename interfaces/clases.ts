
(()=>{

    interface Xmen {
        name: string,
        realName: string,
        mutantPower(id: number):string;
    }

    interface Human {
        age:number;
    }

    class Mutant implements Xmen, Human {
        public age: number = 0;
        public name: string = 'Sin Nombre';
        public realName: string = 'Sin Nombre real';
        mutantPower(id: number): string {
            return this.name + ' ' + this.realName;
        }
    }
})()