

/*
    ===== Código de TypeScript =====
*/
//let direccion:(string|number)[]=['Mexico','Guanajuato','Francisco Villa',1418];

interface utlAlumno{
    nombre:string;
    edad:number;
    direccion:{};
    mostrarDireccion:()=>void;
    
    
}

const pruebaAlumno:utlAlumno={
    nombre:'Laura',
    edad:23,
    direccion:{
        pais:'Mexico',
        estado:'Guanajuato',
        calle:'Francisco Villa',
        numero:1233,
    },

    mostrarDireccion(){

        return this.nombre+','+this.edad+','+this.direccion;
    }

    
}

