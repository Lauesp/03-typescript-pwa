

/*
    ===== Código de TypeScript =====
*/
import{calcularIVA, Producto} from'./05-desestructura-funciones';

const carrito:Producto[]=[{
    desc:'Telefono',
    precio:1270
},
{
    desc:'Telefono2',
    precio:1270
}
];
const [total,iva]=calcularIVA(carrito);
console.log('total',total);
console.log('iva',iva);