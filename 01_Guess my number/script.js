/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🍕 Crrect Number ! '; //DOM 조작

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 24;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🙅‍♀️ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🍕 Crrect Number ! ';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' ↗️ Too high ! ';
      score--;
    } else {
      document.querySelector('.message').textContent = '☠️ You lose.';
    }
    //console.log(document.querySelector('.score'));
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' ↘️ Too low !';
      score--;
    } else {
      document.querySelector('.message').textContent = '☠️ You lose.';
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('guess').value = '';
});
