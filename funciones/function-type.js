"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const great = (name) => `Hola ${name}`;
    const saveTheWold = () => `El mundo está salvado!`;
    // let myFunction:(y:number, z:number)=>number;
    // let myFunction:(y:string)=>string;
    let myFunction;
    //! myFunction = 10;
    //! console.log({myFunction});
    //* myFunction = addNumber
    //* console.log(myFunction(1,2));
    //? myFunction = great
    //? console.log(myFunction('Yuri'));
    myFunction = saveTheWold;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map