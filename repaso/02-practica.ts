

/*
    ===== Código de TypeScript =====
*/
//Ax^2 + Bx + C

//x=(-b(+-)√b^2-4*a*c)
//        2*a

// 2^2 + 3x − 2 = 0

/*function calcular(num1:number,num2:number,num3:number):number{
    return (num2*-1)+Math.sqrt(num2*num2-4*num1*num3);
    return (num2*+1)-Math.sqrt(num2*num2-4*num1*num3);
}
console.log(calcular(10,5,2));*/


class FormulaG{
    private valA:number;
    private valB:number;
    private c:number;
    private valC:number;
    private pasoCero:number;
    private pasoUno:number;
    private pasoDos:number;
    private pasoTres:number;
    private pasoCuatro:number;
    private pasoCinco:number;

    private x1:number;
    private x2:number;

    public iniciar(){
        this.calcular();
    }

    private calcular(){
        this.valA=Math.floor(Math.random()*3)+1;
        this.valB=Math.floor(Math.random()*3)+1;
        this.c=Math.floor(Math.random()*3)+1;
        this.valC=this.c*-1;
        this.pasoCero=this.valB*-1;
        this.pasoUno=this.valB*this.valB;
        this.pasoDos=-4*this.valA*this.valC;
        this.pasoTres=this.valA*2;
        this.pasoCuatro=this.pasoUno+this.pasoDos;
        this.pasoCinco=Math.sqrt(this.pasoCuatro);

        this.x1=this.pasoCero+this.pasoCinco/this.pasoTres;
        this.x2=this.pasoCero-this.pasoCinco/this.pasoTres;

    }

    public Val(){
        console.log(`Valores a calcuar x=(-b(+-)√b^2-4*a*c)/2*a ${this.valA},${this.valB},${this.valC}`);
    }
    public Res(){
        console.log(`X1=${this.x1}, X2${this.x2}`);
    }
   
} 

let Formula=new FormulaG();
Formula.iniciar();
Formula.Val();
Formula.Res();