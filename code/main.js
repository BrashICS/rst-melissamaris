const prompt = require("prompt-sync")()
'use strict';

//npm install prompt-sync\

partone()
function partone(){
  console.log()
  let start = prompt("Welcome to Hang Yo Friend! \nThis is a game of hangman where Player One comes up with a word/phrase for Player Two to guess. \nPlease press the enter key to begin the game OR type out Goodbye to leave the game! ");
    if (start.toLowerCase() === "goodbye") { // what if they type it ina  funky way
      console.log("Goodbye (loser..)!");  // why not play the game..
    } else {
      console.log();
      let confirm1 = prompt("Here are some notes about the game itself! \n 1. Try to guess the secret word/phrase by Player One before all the parts of hangman are there. \n 2. Each error will count as one body part of hangman. \n 3. You are able to fully type out the phrase/word, however if it's wrong that would be 2 body parts instead of one.. so be careful! \n 4. In total, you are able to have 7 errors. The head, torso, right arm, left arm, left leg, right leg, and the rope! \n If all of the body parts and rope appear, you lose. \n \nHand the device over to Player One (Player Two, don't peek!) to begin the game.\nIf the device is handed towards Player One, press enter! "); // rules & other stuff
      if (confirm1 !== null){
        parttwo();
      }
  }
}


function parttwo(){
  let secretword= prompt("Player One, please type in a word/phrase: ")
  let guesses = 0
  let incorrectletters = "" 
  let turnsleft = 7


}
