

/*
    ===== Código de TypeScript =====
*/

import { setSourceMapRange } from "typescript";

function nombres():void{
    console.log('nombre');
}

function sumar(num1:number,num2:number):number{
    return num1+num2;
}
console.log(sumar(10,5));

function restar(num1:number,num2:number,num3?:number):number{
    if(num3){
        return num1-num2-num3;
    }
    else{
        return num1-num2;
    }
   
}

function minus(num1:number,num2:number,num3?:number):number{
    
        return num1-num2-num3;
    
   
}

const sumaFlecha=(a:number, b:number):number=>{
    return a+b;
}

interface escuelaAlumno{
    nombre:string;
    email?:string;
    edad:number;
    saludar:()=>void;
}

function alumnoUTL(alumno:escuelaAlumno,calificar:number):void{
    alumno.nombre='Laura';
    alumno.email='lauesp1928@gmail.com';
    alumno.edad=calificar;
}

const nuevoAlumno:escuelaAlumno={
    nombre:'Gustavo',
    edad:21,
   
    saludar(){
        console.log('Hola Mundo!');
    }
}
//console.log(minus(10,5,2));
//console.log(sumar(10,5));
//console.log(restar(10,5,2));

//console.log(sumar(10,5));

//console.log(nombres());