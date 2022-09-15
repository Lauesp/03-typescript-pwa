

/*
    ===== Código de TypeScript =====
*/

//objetos
let amaterno:string|number;
amaterno='Muñoz';
amaterno=100;

let mascotas=['perro','gato',100,true];
let temp:(boolean|number|string)[]=['rata',100];

temp.push(200);

let acciones:string[]=['dormir','comer','volar'];

interface Alumno{
    matricula:number|string,
    nombre3:string;
    apaterno2:string;
    acciones?:string[];
    email:string;
}

const alumno:Alumno={
    matricula: 1234,
    nombre3:'Laura',
    apaterno2:'Espinoza',
    email:'lauesp1928@gmai.com'
}

alumno.nombre3='Dario';
console.table(alumno);