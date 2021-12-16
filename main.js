// Copiar un objeto que contien objetos y métodos en su interior de forma recursiva
let array = [ '👃','👂','🍓','💘',
'💜','👊','💋','😘','😜','😵', '🙏', 
'👋','🚽','💃','💎','🚀','🌙','🎁', 
'⛄','🌊', '⛵','🏀','🎱','💰','👶', 
'👸','🐰','🐷','🐍','🐫', '🔫','👄',
'🚲','🍉','💛','💚'];


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

