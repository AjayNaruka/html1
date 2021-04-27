$(function(){

  //creo una zucchina base
  var zucchinaBase = {
    varieta: "",
    peso: 0,
    lunghezza: 30  
  }

  var zucchine = []

  for(var i =0;i<10;i++){

    var zucchinaAdd = {
      ...zucchinaBase
    };
    zucchine.push(zucchinaAdd)
  }

  var tot = 0;
  for(zucchina of zucchine){
    zucchina.peso = parseInt(prompt("Inserisci peso: "))
    tot+=zucchina.peso
  }
  console.log(zucchine);
  console.log(tot);
  
  

})