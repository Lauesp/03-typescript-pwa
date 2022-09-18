

/*
    ===== Código de TypeScript =====
*/

class multiplicar1{
    private valor1:number;
    private valor2:number;

    setNumero(a:number, b:number){
        this.valor1=a;
        this.valor2=b;
    }
    getNumero():number{
        return this.valor1;
        return this.valor2;
    }

    public multiplicar1(){
        this.proceso();
    }
    public mostrar(){
            let s:number=1;
            while(s<=this.valor1){
                console.log(`${this.valor1} +`);
                ++s;
            
        } 
    }
    private proceso(){
        /*while(this.valor1<this.valor2){
            console.log(`${this.valor1} + ${this.valor1} = ${this.valor1*this.valor2}`);
            
        }*/
        for(let i=this.valor1; i<=this.valor1; ++i){
            //si funciona :D
            //console.log(`${this.valor1} + ${this.valor1} = ${this.valor1*this.valor2}`);

            //no se si funcione xd
            console.log(`${this.mostrar()} = ${this.valor1*this.valor2}`);
        }
    }
    
}
let suma1=new multiplicar1();
suma1.setNumero(3,5);
console.log(suma1.multiplicar1());