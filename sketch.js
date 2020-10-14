var listado = [];

//funcion para poner fondo y color al fono 
function setup() {

  var fondo = createCanvas(900,500);
  fondo.position(100,100);
  fondo.background(51);
  clear();
}
// funcion para graficar las barras 
function draw() {
  for(var i=1;i<listado.length;i++){
    fill(14+(i*10),210,14+(i*10));
    textSize(20);
    text(listado[i],50*(i+1),50);
    rect(50*(i+1), 55, 30, listado[i]*5);
  }
}
// funcion para crear el listado aleatoreo de numeros 
function aleatoreo(){
listado = [];
for (var i=0, t=10;i<t;i++)
{
  listado.push(Math.round(Math.random()*99)+1);
}
clear();
console.log(listado);
}

function sleep(ms){
  return new Promise(
    resolve=>setTimeout(resolve,ms)
  );
}



// funcion que ordenara los valores 
async  function orden(){
  var n,i,k,aux;
  n=listado.length;
  for(k=1;k<n;k++){
    for(i=0;i<(n-k);i++){
      if(listado[i]>listado[i+1]){
        aux=listado[i];
        listado[i]=listado[i+1];
        listado[i+1]=aux;
        clear();
        await sleep(250);
        console.log(listado);
      }
    }

  }
  clear();
  console.log(listado);
// funcion para encontra el valor maximo 
  function Maximo(){
    var maximo = Math.max.apply(null, listado);
    window.alert("valor maximo : " + maximo);
}
// funcion para encontrar el valor minimo
function Minimo(){
    var minimo = Math.min.apply(null, listado);
    window.alert("valor minimo :" + minimo);
}

  

}