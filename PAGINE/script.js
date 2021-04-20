var pagTot =200;
var pagToFind = 75;

var maxPag = pagTot;
var minPag = 1;
var trovato = false;
var cicle =1;

while(!trovato){
var numEstratto = Math.floor(Math.random()* ( maxPag - minPag) + minPag);
console.log("Numero estratto("+cicle+  "):"+numEstratto );
if(numEstratto>pagToFind){
  maxPag = numEstratto;
} else if(numEstratto<pagToFind)
  {
      minPag = numEstratto;
  }  else{
    trovato = true;
    console.log("Pagina trovata al tentativo: "+cicle);
  }
  cicle++;
}