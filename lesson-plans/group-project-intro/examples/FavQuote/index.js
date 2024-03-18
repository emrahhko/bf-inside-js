'use strict';


const displayQuote = () => {
  
  // Get the input from the user with the id "quoteInput" and remove whitespace with .trim method
  const quoteInput = document.getElementById('quoteInput').value.trim();

  
 // Check if the input is an empty string.
  if (quoteInput !== '') {

    // If input is not empty, display the quote surrounded by double quotes.
    document.getElementById('quoteText').innerText = ' "' + quoteInput + '" ';

    // Show the element with id quoteDisplay by setting display property with "block".
    document.getElementById('quoteDisplay').style.display = 'block';

    // Hide the element with id "quote" by setting display property with "none".
    document.getElementById('quote').style.display = 'none';
  } else {

    // If the input is an empty string, display an alert. that say "please enter a quote"
    alert('Please enter a quote.');
 
  }
};
