const data = document.querySelector('pre').innerText;
const regex = /(\n\d+)+/gm;
const rawFoodPerElf = data.match(regex);

const computeTotalCaloriesPerElf = (element) => {
  if (typeof element === 'number') return element;
  return element.split('\n').reduce((acc, curr) => {
    return Number(acc) + Number(curr);
  }, 0);
};

const max = rawFoodPerElf.reduce((a, b) => {
  return Math.max(computeTotalCaloriesPerElf(a), computeTotalCaloriesPerElf(b));
});

console.log('Max calories: ', max);
