// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let resultado = false;
  if (a === true && b === true) {
    resultado = true;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let trianguloArea = (base * height) / 2;
  return trianguloArea;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arraySplitString = string.split(' ');
  return arraySplitString;
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  let lastItem = stringArray[stringArray.length - 1];
  let firstItem = stringArray[0];
  let concat = lastItem + ', ' + firstItem;
  return concat;
}
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3;
  let empate = ties;
  let soma = vitoria + empate;
  return soma;
}

// Desafio 6
function highestCount(numero) {
  // seu código aqui

  let maior = Math.max.apply(null, numero);
  let contador = 0;
  for (let i in numero) {
    if (maior === numero[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  let vencedor = '';

  if (distanciaGato1 < distanciaGato2) {
    vencedor = 'cat1';
  } else if (distanciaGato1 > distanciaGato2) {
    vencedor = 'cat2';
  } else if (distanciaGato1 === distanciaGato2) {
    vencedor = 'os gatos trombam e o rato foge';
  }
  return vencedor;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let i of arrayNumbers) {
    if (i % 3 === 0 && i % 5 !== 0) {
      arrayFizzBuzz.push('fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(codifica) {
  // seu código aqui
  let newString = codifica.split('');
  let arrayCod = [];
  let stringCod = "";
  for (i of newString) {
    if (i === 'a') {
      arrayCod.push('1');
    } else if (i === 'e') {
      arrayCod.push('2');
    } else if (i === 'i') {
      arrayCod.push('3');
    } else if (i === 'o') {
      arrayCod.push('4');
    } else if (i === 'u') {
      arrayCod.push('5');
    } else {
      arrayCod.push(i);
    }
  }
  for (index of arrayCod) {
    stringCod += index;
  }

  return stringCod;
}
console.log(encode('hi there!'));

function decode(decodifica) {
  let stringSplit = decodifica.split('');
  let arrayDecod = [];
  let stringDecod = "";
  for (i of stringSplit) {
    if (i === '1') {
      arrayDecod.push('a');
    } else if (i === '2') {
      arrayDecod.push('e');
    } else if (i === '3') {
      arrayDecod.push('i');
    } else if (i === '4') {
      arrayDecod.push('o');
    } else if (i === '5') {
      arrayDecod.push('u');
    } else {
      arrayDecod.push(i);
    }
  }
  for (index of arrayDecod) {
    stringDecod += index;
  }
  return stringDecod
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(arrayTec, name) {
  // seu código aqui
  let newArray = [];
  arrayTec.sort(); 
    for (i of arrayTec) {
      newArray.push({ tech: i, name: name })
    }
    if(arrayTec.length === 0){
      return 'Vazio!';
    }else{
    return newArray;
    }
  }
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

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
}