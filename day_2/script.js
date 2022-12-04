const node = document.querySelector('pre');
const data = node.innerText;
const arrayOfplays = data.split('\n');
const score = { a: 0, b: 0 };

arrayOfplays.forEach((play) => {
  const playList = play.split(' ');
  computeScore(playList, score);
});

function computeScore(play, score) {
  if (play.length !== 2) return;
  if (play[0] === 'A' && play[1] === 'X') {
    // rock vs rock
    score.a = score.a + 3 + 1;
    score.b = score.b + 3 + 1;
  }
  if (play[0] === 'A' && play[1] === 'Y') {
    // rock vs paper
    score.a = score.a + 0 + 1;
    score.b = score.b + 6 + 2;
  }
  if (play[0] === 'A' && play[1] === 'Z') {
    // rock vs scissors
    score.a = score.a + 6 + 1;
    score.b = score.b + 0 + 3;
  }
  // ===========
  if (play[0] === 'B' && play[1] === 'X') {
    // paper vs rock
    score.a = score.a + 6 + 2;
    score.b = score.b + 0 + 1;
  }
  if (play[0] === 'B' && play[1] === 'Y') {
    // paper vs paper
    score.a = score.a + 3 + 2;
    score.b = score.b + 3 + 2;
  }
  if (play[0] === 'B' && play[1] === 'Z') {
    // paper vs scissors
    score.a = score.a + 0 + 2;
    score.b = score.b + 6 + 3;
  }
  // ===========
  if (play[0] === 'C' && play[1] === 'X') {
    // scissors vs rock
    score.a = score.a + 0 + 3;
    score.b = score.b + 6 + 1;
  }
  if (play[0] === 'C' && play[1] === 'Y') {
    // scissors vs paper
    score.a = score.a + 6 + 3;
    score.b = score.b + 0 + 2;
  }
  if (play[0] === 'C' && play[1] === 'Z') {
    // scissors vs scissors
    score.a = score.a + 3 + 3;
    score.b = score.b + 3 + 3;
  }
  console.log({ score });
}
