

/*
    ===== Código de TypeScript =====
*/
class Persona{ //private, protected, public
    private nombre:string;
    private edad:number;

    constructor (a:string, b:number){
        this.nombre=a;
        this.edad=b;
    }
    setNombre(a:string){
        this.nombre=a;
    }
    getNombre():string{
        return this.nombre;
    }

    private imprimir():void{
        console.log(`Nombre: ${this.nombre} y edad ${this.edad}`);
    }
}

let persona1:Persona;
persona1=new Persona('Laura',21);
persona1.setNombre('Laura');
console.log(persona1.getNombre());
/*persona1.edad=21;e.l
persona1.imprimir();
persona2.imprimir();
let persona2=new Persona('Gutavo',21);*/

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }

    
}
let dado1=new Dado();
dado1.tirar();
dado1.imprimir();

