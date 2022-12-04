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

const arrayOfBadges = [];
while (arrayOfRucksacks.length > 0) {
  let arrayOfResults = [];
  const [string1, string2, string3] = arrayOfRucksacks.splice(0, 3);
  let myIndex;
  string1.split('').forEach((letter, index) => {
    myIndex = index;
    if (
      string2.split('').includes(letter) &&
      string3.split('').includes(letter)
    ) {
      arrayOfResults.push(letter);
    }
  });
  arrayOfBadges.push(arrayOfResults[0]);
}

arrayOfBadges.forEach((letter) => {
  if (letter !== letter.toUpperCase()) {
    sumOfPriorities += letters.indexOf(letter) + 1;
  } else if (letter === letter.toUpperCase()) {
    const lower = letter.toLowerCase();
    sumOfPriorities += letters.indexOf(lower) + 27;
  }
});
console.log('Sum: ', sumOfPriorities);

function onlySpaces(str) {
  return str.trim().length === 0;
}
