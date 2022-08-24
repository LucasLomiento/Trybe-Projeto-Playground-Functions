// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length != 11) return 'Array com tamanho incorreto.';
  for (let number of arr) {
    if(number < 0 || number > 9) return 'não é possível gerar um número de telefone com esses valores';
    
    let counter = 0;
    for (let otherNumbers of arr) {
      if (number === otherNumbers) {
        counter++;
      }
      if (counter === 3) return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13.
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
