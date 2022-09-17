

/*
    ===== Código de TypeScript =====
*/
//let direccion:(string|number)[]=['Mexico','Guanajuato','Francisco Villa',1418];
interface Direccion{
    calle:string;
    pais:string;
    estado:string;
}

interface DatosAlumno{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion:()=>string;
}
/*interface utlAlumno{
    nombre:string;
    edad:number;
    direccion:{};
    mostrarDireccion:()=>void;
}*/

const AlumnoUTL:DatosAlumno={
    nombre:'Laura',
    edad:23,
    direccion:{
        pais:'Mexico',
        estado:'Guanajuato',
        calle:'Francisco Villa',
    },

    mostrarDireccion(){

        return this.nombre+', '+this.direccion.estado+','+this.direccion.pais;
    }

    
}
const direccion=AlumnoUTL.mostrarDireccion();
console.log(direccion);
