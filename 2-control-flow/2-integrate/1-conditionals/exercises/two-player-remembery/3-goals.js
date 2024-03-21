// #todo

'use strict';

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);

let score = 0;

/* -- BEGIN: gather player 2's guesses) -- */
const guess1 = prompt('what was the first phrase:');

if (guess1 === phrase1) {
  score += 1;

  const guess2 = prompt('what was the second phrase:');

  if (guess2 === phrase2) {
    score += 1;

    const guess3 = prompt('what was the third phrase:');

    if (guess3 === phrase3) {
      score += 1;
    }
  }
}
/* -- END: gather player 2's guesses -- */

alert(`your score: ${score}`);
