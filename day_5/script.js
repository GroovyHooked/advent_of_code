const data = document.querySelector('pre').innerText;

// top <-> bottom
let container = [
  ['S', 'P', 'H', 'V', 'F', 'G'],
  ['M', 'Z', 'D', 'V', 'B', 'F', 'J', 'G'],
  ['N', 'J', 'L', 'M', 'G'],
  ['P', 'W', 'D', 'V', 'Z', 'G', 'N'],
  ['B', 'C', 'R', 'V'],
  ['Z', 'L', 'W', 'P', 'M', 'S', 'R', 'V'],
  ['P', 'H', 'T'],
  ['V', 'Z', 'H', 'C', 'N', 'S', 'R', 'Q'],
  ['J', 'Q', 'V', 'P', 'G', 'L', 'F'],
];

const sequencesRegex = /move\s\d+\sfrom\s\d+\sto\s\d+/gm;
const numberRegex = /\d+/gm;
const procedure = data.match(sequencesRegex);

procedure.forEach((sequence) => {
  const [howMany, from, to] = sequence.match(numberRegex);
  const elementsToMove = container[Number(from) - 1].splice(0, Number(howMany));
  elementsToMove.forEach((letter) => container[Number(to) - 1].unshift(letter));
});
let sequenceToReturn = '';
container.forEach((array) => {
  sequenceToReturn += array[0];
});
console.log(sequenceToReturn);
