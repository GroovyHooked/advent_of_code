const data = document.querySelector('pre').innerText;
//const data = '30373\n25512\n65332\n33549\n35390\n';
const rows = data.split('\n').filter((el) => !onlySpaces(el));

let visibleTrees = 0;
const outline = rows.length * 2 + rows[0].length * 2 - 4;

for (let i = 1; i < rows.length - 1; i++) {
  for (let j = 1; j < rows[i].length - 1; j++) {
    let vertical = '';
    for (let k = 0; k < rows.length; k++) {
      vertical += rows[k][j] !== undefined ? rows[k][j] : '';
    }
    let leftBool = true;
    let rightBool = true;
    let topBool = true;
    let bottomBool = true;

    const treeToCheck = rows[i][j];
    const left = rows[i].slice(0, j);
    const right = rows[i].slice(j + 1);
    const top = vertical.slice(0, i);
    const bottom = vertical.slice(i + 1);

    left.split('').forEach((number) => {
      if (number >= treeToCheck) {
        leftBool = false;
      }
    });
    right.split('').forEach((number) => {
      if (number >= treeToCheck) {
        rightBool = false;
      }
    });
    top.split('').forEach((number) => {
      if (number >= treeToCheck) {
        topBool = false;
      }
    });
    bottom.split('').forEach((number) => {
      if (number >= treeToCheck) {
        bottomBool = false;
      }
    });
    if (
      leftBool === true ||
      rightBool === true ||
      topBool === true ||
      bottomBool === true
    ) {
      visibleTrees++;
    }
  }
}
console.log(outline + visibleTrees);

function onlySpaces(str) {
  return str.trim().length === 0;
}
