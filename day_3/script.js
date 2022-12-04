const data = document.querySelector('pre').innerText;
const arrayOfRucksacks = data.split('\n').filter((el) => !onlySpaces(el));
const letters = 'abcdefghijklmnopqrstuvwxyz';
let sumOfPriorities = 0;
let commonItems = [];

arrayOfRucksacks.forEach((rucksack, index) => {
  const firstPart = rucksack.slice(0, rucksack.length / 2);
  const secondPart = rucksack.slice(rucksack.length / 2);
  if (onlySpaces(rucksack)) return;
  firstPart.split('').forEach((letter) => {
    if (secondPart.split('').includes(letter)) {
      if (commonItems[index] === letter) {
        return;
      } else {
        commonItems.push(letter);
      }
    }
  });
});

commonItems.forEach((letter) => {
  if (letter !== letter.toUpperCase()) {
    sumOfPriorities += letters.indexOf(letter) + 1;
  } else if (letter === letter.toUpperCase()) {
    const lower = letter.toLowerCase();
    sumOfPriorities += letters.indexOf(lower) + 27;
  }
});
console.log('sumOfPriorities: ', sumOfPriorities);

function onlySpaces(str) {
  return str.trim().length === 0;
}
