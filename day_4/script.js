const data = document.querySelector('pre').innerText;
const arrayOfSections = data.split('\n').filter((el) => !onlySpaces(el));
let howManyShift = 0;
arrayOfSections.forEach((line, index) => {
  const newline = line
    .split('')
    .filter((el) => el !== ' ')
    .join('');
  const [range1, range2] = newline.split(',');
  const [start1, end1] = range1.split('-');
  const [start2, end2] = range2.split('-');
  if (
    (Number(start1) <= Number(start2) && Number(end1) >= Number(end2)) ||
    (Number(start2) <= Number(start1) && Number(end2) >= Number(end1))
  ) {
    howManyShift++;
  }
  arrayOfSections[index] = newline;
});
console.log({ howManyShift });

function onlySpaces(str) {
  return str.trim().length === 0;
}
