(()=>{

    const fullName = (firstName:string, lastName?:string, upper:boolean=false): string => {
        
        if(upper){
            return `${ firstName } ${lastName || '---' }`.toUpperCase();
        }else{
            return `${ firstName } ${lastName || '---' }`;
        }
    }

    const name = fullName('yuri','rojas',true);
    console.log( {name} );
})()