let objetos = [  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
];
let seleccion = [];
var S = 3;
let salto = [S,S];
let limites = [ 0, S ];

let ciclo = ()=>{
  limites = limites.map((e,ide)=>{
    if(objetos.length > e+1){
      return e+salto[ide];
    }else{
      return e;
    }
  });
}


let paginar = ()=>{
  if(seleccion.length < objetos.length){
      seleccion = objetos.slice(limites[0],limites[1]);
      ciclo();
  }else{
    console.log("Fin de paginado")
  }
  console.log(seleccion)
}
