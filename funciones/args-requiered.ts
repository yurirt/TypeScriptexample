(()=>{

    const fullName = (firstName:string, lastName:string): string => {
        return `${ firstName } ${lastName}`;
    }

    const name = fullName('yuri','rojas');
    console.log( name );
})()