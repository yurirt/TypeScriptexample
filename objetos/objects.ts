(() => {

    let flash:{name: string, age?: number, powers: string[], getName?: () => string} = {
        name: 'Barry Allen',
        age:24,
        powers:['Super Velocidad','Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers:['Super fuerza'],
        getName(){
            return this.name;
        }
    }

    console.log( flash.getName() );

})()