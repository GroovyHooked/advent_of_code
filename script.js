const input = document.querySelector('pre');
const data = input.innerText;
const regex = /(\n\d+)+/gm;
const rawFoodPerElf = data.match(regex);
const arrayOfTotalCalories = [];
const topValues = [];

for (let i = 0; i < 3; i++) {
  const { max, index } = computeMaxCalories(rawFoodPerElf);
  topValues.push(max);
  i === 0 ? rawFoodPerElf.splice(index, 1) : rawFoodPerElf.splice(index - 1, 1);
}

console.log(
  'Top values total:',
  topValues.reduce((acc, curr) => {
    return acc + curr;
  })
);

function computeMaxCalories(arrayOfValues) {
  const max = arrayOfValues.reduce((a, b) => {
    if (typeof a === 'string')
      arrayOfTotalCalories.push(computeTotalCaloriesPerElf(a));
    if (typeof b === 'string')
      arrayOfTotalCalories.push(computeTotalCaloriesPerElf(b));
    return Math.max(
      computeTotalCaloriesPerElf(a),
      computeTotalCaloriesPerElf(b)
    );
  });
  return { max, index: arrayOfTotalCalories.indexOf(max) };
}

function computeTotalCaloriesPerElf(element) {
  if (typeof element === 'number') return element;
  const array = element.split('\n');
  return array.reduce((acc, curr) => {
    return Number(acc) + Number(curr);
  }, 0);
}
