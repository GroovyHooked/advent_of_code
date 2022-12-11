const data = document.querySelector('pre').innerText;
const instructions = data.split('\n');
const addXRegex = /-?\d+/gm;
const noopRegex = /noop/gm;
let cycle = 0;
let signalStrength = 1;
const arrayOfSignals = [];

instructions.forEach((instruction) => {
  if (instruction.match(addXRegex)) {
    const signal = Number(instruction.match(addXRegex)[0]);
    for (let i = 0; i <= 1; i++) {
      if (i === 1) signalStrength += signal;
      cycle++;
      retrieveSignals();
    }
  }
  if (instruction.match(noopRegex)) {
    cycle++;
    retrieveSignals();
  }
});
console.log({ arrayOfSignals });

const multiples = [20, 60, 100, 140, 180, 220];
const result = arrayOfSignals.reduce(
  (acc, curr, index) => acc + curr * multiples[index],
  0
);

console.log({ result });

function retrieveSignals() {
  cycle === 20 ? (arrayOfSignals[0] = signalStrength) : null;
  cycle === 60 ? (arrayOfSignals[1] = signalStrength) : null;
  cycle === 100 ? (arrayOfSignals[2] = signalStrength) : null;
  cycle === 140 ? (arrayOfSignals[3] = signalStrength) : null;
  cycle === 180 ? (arrayOfSignals[4] = signalStrength) : null;
  cycle === 220 ? (arrayOfSignals[5] = signalStrength) : null;
}
