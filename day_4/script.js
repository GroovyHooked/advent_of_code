const data = document.querySelector('pre').innerText;
const arrayOfSections = data.split('\n').filter((el) => !onlySpaces(el));
let howManyShift = 0;

arrayOfSections.forEach((line) => {
  const newline = line
    .split('')
    .filter((el) => el !== ' ')
    .join('');
  const [range1, range2] = newline.split(',');
  const [start1, end1] = range1.split('-');
  const [start2, end2] = range2.split('-');

  let hoursOverlaped = 0;
  const isFirstLonger =
    Number(end1) - Number(start1) > Number(end2) - Number(start2);
  const array = [];
  if (isFirstLonger) {
    for (let y = Number(start2); y <= Number(end2); y++) {
      array.push(y);
    }
    for (let i = Number(start1); i <= Number(end1); i++) {
      if (array.includes(i)) {
        hoursOverlaped++;
      }
    }
  } else {
    for (let y = Number(start1); y <= Number(end1); y++) {
      array.push(y);
    }
    for (let i = Number(start2); i <= Number(end2); i++) {
      if (array.includes(i)) {
        hoursOverlaped++;
      }
    }
  }
  hoursOverlaped !== 0 ? howManyShift++ : null;
});
console.log({ arrayOfSections, howManyShift });

function onlySpaces(str) {
  return str.trim().length === 0;
}
