"use strict";
(() => {
    const fullName = (firstName, lastName, upper) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('yuri');
    console.log({ name });
})();
