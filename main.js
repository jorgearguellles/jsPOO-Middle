// Copiar un objeto que contien objetos y mΓ©todos en su interior de forma recursiva
let array = [ 'π','π','π','π',
'π','π','π','π','π','π΅', 'π', 
'π','π½','π','π','π','π','π', 
'β','π', 'β΅','π','π±','π°','πΆ', 
'πΈ','π°','π·','π','π«', 'π«','π',
'π²','π','π','π'];


function recursiva(numArray){

  if(numArray.length != 0){
    const firstNum = numArray[0];
    console.log(firstNum);
    numArray.shift();
    recursiva(numArray);
  }
}

recursiva(array);

// Deep Copy :)

