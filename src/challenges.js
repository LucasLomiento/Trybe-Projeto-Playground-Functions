// Desafio 1
function compareTrue(param1, param2) {
  return (param1 && param2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (array[array.length - 1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max(...array);
  let counter = 0;
  for (let number of array) {
    (number === highestNumber) ? counter += 1 : 0;
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge'
  } else if (cat1Distance > cat2Distance) {
    return 'cat2'
  } else {
    return 'cat1'
  }

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
