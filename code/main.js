const prompt = require("prompt-sync")()
'use strict';

//npm install prompt-sync

partone()

function partone(){
  console.log()
  let start = prompt("Welcome to Hang Yo Friend! \nThis is a game of hangman where Player One comes up with a word/phrase for Player Two to guess. \nPlease press the enter key to begin the game OR type out Goodbye to leave the game! ");
    if (start.toLowerCase() === "goodbye") { // what if they type it ina  funky way
      console.log("Goodbye (loser..)!");  // why not play the game..
    } else {
      console.log();
      let confirm1 = prompt("Here are some notes about the game itself! \n 1. Try to guess the secret word/phrase by Player One before all the parts of hangman are there. \n 2. Each error will count as one body part of hangman. \n 3. You are NOT able to fully type out the phrase/word! \n 4. In total, you are able to have 7 errors. The head, torso, right arm, left arm, left leg, right leg, and the rope! \n If all of the body parts and rope appear, you lose. \n \nHand the device over to Player One (Player Two, don't peek!) to begin the game.\nIf the device is handed towards Player One, press enter! "); // rules & other stuff
      if (confirm1 !== null){
        parttwo();
      }
  }
}

function parttwo(){
  let secretword= prompt("Player One, please type in a word/phrase for Player Two to Guess: ").toUpperCase();
  console.log("\n \n \n \n \n \n \n \n \n \n \n \n")
  let turnsleft = 6;
  let incorrectguesses = "";
  let remainingletters = 0;

  let hangmanphases = [
  `
  + - - +
  |
  |     o
  |
  |
  |
  |
  + - - - - - +
  ` ,
  `
  + - - +
  |
  |     o
  |     |
  |     |
  |
  |
  + - - - - - +
  `,
  `
  + - - +
  |
  |     o
  |    /|
  |     |
  |
  |
  + - - - - - +
  `,
  `
  + - - +
  |
  |     o
  |    /||
  |     |
  |
  |
  + - - - - - +
  `,
  `
  + - - +
  |
  |     o
  |    /||
  |     |
  |    /
  |
  + - - - - - +
  `,
  `
  + - - +
  |
  |     o      Please get it right..
  |    /||
  |     |
  |    / |
  |
  + - - - - - +
  `,
  `
  + - - +
  |     |
  |     x       Blegh..
  |    /||
  |     |
  |    / |
  |
  + - - - - - +
  `
  ];

  let answer = [];
  for (let boo = 0; boo < secretword.length; boo++) {
    if (secretword.charCodeAt(boo) >= 65 && secretword.charCodeAt(boo) <= 90) { // checks to see if its actually a letter a - z
      answer[boo] = "_";
      remainingletters++;
    } else {
      answer[boo] = secretword[boo]
    }
  }

  while (remainingletters > 0 && turnsleft > 0) {
    let answerdisplay = "";
    for (let boo = 0; boo < answer.length;boo++) {
      answerdisplay += answer[boo] + " ";
    }

    console.log(answerdisplay);
    console.log("Incorrect Guesses: " + incorrectguesses);
    console.log("Turns Left: " + turnsleft);

    let guess = prompt("Guess one letter: ").toUpperCase();

    if (guess.length !== 1 || guess.charCodeAt(0) < 65 || guess.charCodeAt(0) > 90) {
      console.log("Please enter a SINGULAR letter from A-Z. ")
      continue;
    }

    let correctguess = false;
    for (let boo = 0; boo < secretword.length; boo++) {
      if (secretword[boo] === guess && answer[boo] === "_"){
        answer[boo] = guess;
        remainingletters--;
        correctguess = true;
      }
    }

    if (!correctguess) {
      let newguess = true;
      for (let boo = 0; boo < incorrectguesses.length; boo++) {
        if (incorrectguesses[boo] === guess) {
          newguess = false;
        }
      }

      if (newguess){
        incorrectguesses += guess + " ";
        turnsleft--;
        console.log(hangmanphases[6 - turnsleft]);
      } else {
        console.log("You already guessed that letter... ")
      }
    }

    if (turnsleft > 0){
      console.log(hangmanphases[6 - turnsleft])
    }
  }

  if (remainingletters === 0){
    let answerdisplay = "";
    for (let boo = 0; boo < answer.length; boo++) {
      answerdisplay += answer[boo] + " ";
    }
    console.log(answerdisplay);
    console.log(
      `
      + - - +
      |
      |    | o /   YIPPEE!!
      |      |
      |      |
      |     / |
      + - - - - - +
      `);
      console.log("Congrats! You guessed their word & saved yourself!")
      console.log()
  } else {
    console.log(hangmanphases[6])
    console.log("Sorry Player Two, you lost. The answer was " + secretword + "!")
    console.log()
  }
}
