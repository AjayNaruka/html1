$(function(){

  var testArray =[1,2,3,4,5,6,7,8,9]

  var newArray = arrayTrim(testArray,5,8)
  console.log(newArray);

  //FUNZIONI
  function arrayTrim(arr,min,max){
    var newArr =[];
    //EVITO DI LAVORARE IN CASO SPECIFICO
    if(min==0 && max==arr.length) return arr
    if(min < 0 || max>arr.length){
      console.log("Parametri non idonei");
      return 0
    }

    for(var i=min; i <max;i++){
      newArr.push(arr[i])
    }
    return newArr
  }

})