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

alert('players 2 go hide');

const phrase1 = prompt('what is your first phrase:');
const phrase2 = prompt('what is your second phrase');
const phrase3 = prompt('what is your third phrase');

alert('players 2 come back here');

alert(` 
memorize those phrases
"${phrase1}"
"${phrase2}"
"${phrase3}"`);

let score = 0;

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
alert(`your score is ${score}.`);
