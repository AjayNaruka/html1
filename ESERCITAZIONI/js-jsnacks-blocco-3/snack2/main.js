$(function(){

  var zucchina1 = {
    varieta: "",
    peso: 10,
    lunghezza: 30  
  }
  var zucchina2 = {
    varieta: "",
    peso: 15,
    lunghezza: 20  
  }
  var zucchina3 = {
    varieta: "",
    peso: 22,
    lunghezza: 10  
  }
  var zucchina4 = {
    varieta: "",
    peso: 31,
    lunghezza: 5
  }
  var zucchina5 = {
    varieta: "",
    peso: 15,
    lunghezza: 22  
  }
  var zucchina6 = {
    varieta: "",
    peso: 13,
    lunghezza: 18 
  }
  var zucchina7 = {
    varieta: "",
    peso: 24,
    lunghezza: 10 
  }
  var zucchina8 = {
    varieta: "",
    peso: 27,
    lunghezza: 10
  }
  var zucchina9 = {
    varieta: "",
    peso: 8,
    lunghezza: 5 
  }
  var zucchina10 = {
    varieta: "",
    peso: 11,
    lunghezza: 30  
  }

var zucchine = [
  zucchina1,
  zucchina2,
  zucchina3,
  zucchina4,
  zucchina5,
  zucchina6,
  zucchina7,
  zucchina8,
  zucchina9,
  zucchina10
]
console.log(zucchine);

 var zucchineC =[]
 var zucchineL =[]

 for(zucchina of zucchine){
   if(zucchina.lunghezza>15) zucchineL.push(zucchina)
   else zucchineC.push(zucchina)
 }
 console.log(zucchineC);
 console.log(zucchineL);

 var pesoC =0;
 var pesoL =0;
 for(zucchina of zucchineC){
   pesoC+= zucchina.peso
 }
 for(zucchina of zucchineL){
  pesoL+= zucchina.peso
}

console.log("le zucchine corte pesano: "+pesoC);
console.log("le zucchine lunghe pesano: "+pesoL);

})