const data = document.querySelector('pre').innerText;
const rows = data.split('\n').filter((el) => !onlySpaces(el));
const arrayOfTreeVisibility = [];

for (let i = 1; i < rows.length - 1; i++) {
  for (let j = 1; j < rows[i].length - 1; j++) {
    let treeScoreArray = [];
    let vertical = '';
    for (let k = 0; k < rows.length; k++) {
      vertical += rows[k][j] !== undefined ? rows[k][j] : '';
    }
    const treeToCheck = rows[i][j];
    const left = rows[i].slice(0, j);
    const right = rows[i].slice(j + 1);
    const top = vertical.slice(0, i);
    const bottom = vertical.slice(i + 1);

    computeVisiblity(top, true, 0, treeScoreArray, treeToCheck);
    computeVisiblity(right, false, 1, treeScoreArray, treeToCheck);
    computeVisiblity(bottom, false, 2, treeScoreArray, treeToCheck);
    computeVisiblity(left, true, 3, treeScoreArray, treeToCheck);

    const result = treeScoreArray.reduce((acc, curr) => acc * curr, 1);
    arrayOfTreeVisibility.push(result);
  }
}

const max = Math.max(...arrayOfTreeVisibility);
console.log({ max });

function onlySpaces(str) {
  return str.trim().length === 0;
}

function computeVisiblity(
  string,
  isReverse,
  index,
  treeScoreArray,
  treeToCheck
) {
  let counter = 1;
  let temp = undefined;
  if (isReverse) {
    if (string.split('').length === 1) {
      if (string.split('')[0] >= treeToCheck) {
        temp === undefined ? (temp = 1) : null;
      }
    } else {
      for (let i = string.split('').length - 1; i > 0; i--) {
        if (string.split('')[i] >= treeToCheck) {
          temp === undefined ? (temp = counter) : null;
        }
        counter++;
      }
    }
  } else {
    if (string.split('').length === 1) {
      if (string.split('')[0] >= treeToCheck) {
        temp === undefined ? (temp = 1) : null;
      }
    } else {
      for (let i = 0; i <= string.split('').length - 1; i++) {
        if (string.split('')[i] >= treeToCheck) {
          temp === undefined ? (temp = i + 1) : null;
        }
      }
    }
  }
  temp === undefined
    ? (treeScoreArray[index] = string.split('').length)
    : (treeScoreArray[index] = temp);
}
