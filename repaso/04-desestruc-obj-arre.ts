

/*
    ===== Código de TypeScript =====
*/
//let direccion:(string|number)[]=['Mexico','Guanajuato','Francisco Villa',1418];
interface Detalles{
    autor:string;
    anio:number;
}

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

const reproductor:Reproductor={
    volumen:90,
    segundo:60,
    cancion:'Dracula',
    detalles:{
        autor:'Gorillaz',
        anio:2003,
    }
}

const{cancion,volumen,segundo}=reproductor;

//const{autor,anio}=detalles;


console.table('el nombre de la cancion:'+cancion);
console.table('el volumen de la cancion:'+volumen);
console.table('el segundo de la cancion:'+segundo);
//console.table('el autor de la cancion:'+reproductor.detalles.autor);
//console.table('el año de la cancion:'+reproductor.detalles.anio);


const gorillaz:string[]=['2D','Murdoc','Russel','Noodle'];

console.log('Vocalista de Gorillaz:',gorillaz[0]);
console.log('Bajista de Gorillaz:',gorillaz[1]);
console.log('Baterista de Gorillaz:',gorillaz[2]);
console.log('Guitarrista de Gorillaz:',gorillaz[3]);

const[p1,p2,p3,p4]=gorillaz;

console.log('Vocalista de Gorillaz:', p1);
console.log('Bajista de Gorillaz:', p2);
console.log('Baterista de Gorillaz:',p3);
console.log('Guitarrista de Gorillaz:', p4);