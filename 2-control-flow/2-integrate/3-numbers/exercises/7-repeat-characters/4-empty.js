// #todo

'use strict';

let toRepeat = '';
let repetitions = NaN;
let  numsOfTimes = '';

let notConfirmed = false;
while (!notConfirmed) {
  toRepeat = prompt('enter a phrase, each character will be repeated:');

  if (toRepeat === '' || toRepeat === null) {
    alert('nope, enter something');
  } else {
    /* -- BEGIN: get a number from the user -- */
    while (true) {
      numsOfTimes = prompt('how many time want you to repeat it?');
      if (numsOfTimes === '' || numsOfTimes === null) {
        alert('nope no escape enter something');
        continue;
      } else {
        break;
      }
    }

    repetitions = Number(numsOfTimes);
    if (isNaN(repetitions)) {
      alert('no "' + numsOfTimes + '" is not a number');
      continue;
    }
    /* -- END -- */

    const confirmMessage =
      'is this correct?\n\n' + '- "' + toRepeat + '"\n' + '- ' + repetitions;
    notConfirmed = confirm(confirmMessage);
  }
}

let withRepeatedCharacters = '';

/* -- BEGIN: repeat each character in the string -- */

for (let i = 0; i < toRepeat.length; i++) {
  for (let j = 0; j < repetitions; j++) {
    withRepeatedCharacters = withRepeatedCharacters + toRepeat[i];
  }
}


/* -- END -- */

const finalMessage = `"${toRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
