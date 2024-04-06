let userInput = '';
let confirmUserInput = false;

while (!confirmUserInput) {
  while (userInput === '' || userInput === null) {
    userInput = prompt('Enter a phrase to search');
  }

  confirmUserInput = confirm('Is this correct: "' + userInput + '" ?');

  if (!confirmUserInput) {
    userInput = '';
  }
}

let isCaseSensitive = confirm('Do you want a case-sensitive search?');

let toSearch = '';
let confirmToSearch = false;

while (!confirmToSearch) {

  while (toSearch === '' || toSearch === null) {
    toSearch = prompt('Enter a search query. This program will check if it exists in your phrase');
  }

  
  confirmToSearch = confirm('Is this correct: "' + toSearch + '" ?');

  
  if (!confirmToSearch) {
    toSearch = '';
  }
}


let searchQuery = isCaseSensitive ? toSearch : toSearch.toLowerCase();
let message = '';


if (userInput.includes(searchQuery)) {
  message = '"' + userInput + '" does include: "' + toSearch + '"';
} else {
  message = '"' + userInput + '"  does not include: "' + toSearch + '"';
}


alert(message);

