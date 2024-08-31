// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

(()=>{
  interface Auto {
    encender:boolean,
    velocidadMaxima:number,
    acelear (): void
  }
  
  const batimovil : Auto = {
    encender:false,
    velocidadMaxima:0,
    acelear(){
      console.log("...... gogogo!!!");
    }
  }
  
  const conducirBatimovil = ( auto: Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  }
  
 
  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales
  
  interface Villano  {
    reir?: Boolean,
    comer?:Boolean,
    llorar?:Boolean
  }

  const guason : Villano = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  const reir = ( guason:Villano ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion

  interface Ciudadanos {
    (ciudadanos:string[]):number;
  }
  
  // let ciudadGotica = Ciudadanos;

  // ciudadGotica = (ciudadanos:string[])=>{
  //   return ciudadanos.length;
  // }

  const ciudadGotica:Ciudadanos = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  // Cree una interfaz que obligue crear una clase
  interface Humano {
    nombre: string,
    edad: number,
    sexo: string,
    estadoCivil:string,
    imprimirBio(): void
  }

  // con las siguientes propiedades y metodos
  
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  class Persona implements Humano {
    public nombre: string
    public edad: number
    public sexo: string
    public estadoCivil:string
    imprimirBio():void {
        console.log('imprimir vio');
    }
  }

})()

