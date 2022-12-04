const node = document.querySelector('pre');
const data = node.innerText;
const arrayOfplays = data.split('\n');
const score = { a: 0, b: 0 };

arrayOfplays.forEach((play) => {
  const playList = play.split(' ');
  computeRealScore(playList, score);
});

// Rock [A, X] .      X loose
// Paper [B, Y]       Y draw
// Scissors [C, Z]      Z win

function computeRealScore(play, score) {
  if (play.length !== 2) return;
  if (play[1] === 'X') {
    if (play[0] === 'A') {
      score.a = score.a + 6 + 1;
      score.b = score.b + 0 + 3;
    }
    if (play[0] === 'B') {
      score.a = score.a + 6 + 2;
      score.b = score.b + 0 + 1;
    }
    if (play[0] === 'C') {
      score.a = score.a + 6 + 3;
      score.b = score.b + 0 + 2;
    }
  }
  if (play[1] === 'Y') {
    if (play[0] === 'A') {
      score.a = score.a + 3 + 1;
      score.b = score.b + 3 + 1;
    }
    if (play[0] === 'B') {
      score.a = score.a + 3 + 2;
      score.b = score.b + 3 + 2;
    }
    if (play[0] === 'C') {
      score.a = score.a + 3 + 3;
      score.b = score.b + 3 + 3;
    }
  }
  if (play[1] === 'Z') {
    if (play[0] === 'A') {
      score.a = score.a + 0 + 1;
      score.b = score.b + 6 + 2;
    }
    if (play[0] === 'B') {
      score.a = score.a + 0 + 2;
      score.b = score.b + 6 + 3;
    }
    if (play[0] === 'C') {
      score.a = score.a + 0 + 3;
      score.b = score.b + 6 + 1;
    }
  }
  console.log({ score });
}
