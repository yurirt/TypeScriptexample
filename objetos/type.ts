(()=>{

    type Hero = {
        name: string;
        age?:number;
        powers: string[];
        getName?:() => string;
        
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age:24,
        powers:['Super Velocidad','Viajar en el tiempo']
    }

    let superMan: Hero = {
        name: 'Clark Kent',
        age:60,
        powers:['Super Velocidad','Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }


})()