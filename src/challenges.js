// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if ( a===true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let trianguloArea = (base * height) / 2;
  return trianguloArea;
}
// console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arraySplitString = string.split("\ ");
  return arraySplitString;
};
// console.log(splitSentence("go Trybe"));
// console.log(splitSentence("vamo que vamo"));
// console.log(splitSentence("foguete"));


// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  let lastItem = stringArray[stringArray.length - 1]
  let firstItem = stringArray[0];
  let concat = lastItem + ", " + firstItem;
  return concat;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins *3;
  let empate = ties;
  let soma = vitoria + empate;
  return  soma;
}

// Desafio 6
function highestCount(numero) {
  // seu código aqui
  
  let maior = Math.max.apply(null, numero);
  let contador = 0;
  for(i in numero){
    if(maior === numero[i]){
      contador += 1 
    }
  }
    return contador;
}
 
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
