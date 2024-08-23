"use strict";
(() => {
    let myCustomVariable = 'Yuri';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map