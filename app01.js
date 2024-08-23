"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    console.log(parejaHeroes);
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let NilverFuera;
    (function (NilverFuera) {
        NilverFuera[NilverFuera["Flash"] = 5] = "Flash";
        NilverFuera[NilverFuera["Superman"] = 100] = "Superman";
        NilverFuera[NilverFuera["Batman"] = 1] = "Batman";
        NilverFuera[NilverFuera["Acuaman"] = 0] = "Acuaman";
    })(NilverFuera || (NilverFuera = {}));
    const fuerzaFlash = NilverFuera.Flash;
    const fuerzaSuperman = NilverFuera.Superman;
    const fuerzaBatman = NilverFuera.Batman;
    const fuerzaAcuaman = NilverFuera.Acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app01.js.map