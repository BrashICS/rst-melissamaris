const prompt = require("prompt-sync")()
'use strict';

function parttwo(){
  let secretword= prompt("Player One, please type in a word/phrase: ")
  let guess = ""
  let incorrectletters = ""
  let turnsleft = 7
  let remainingletters = secretword.length

  answer = []
  for (boo = 0; boo < secretword.length; boo++){
    answer[boo] = "_"
  }

  while (remainingletters > 0){
    console.log(answer)
    guess = prompt("Guess one letter: ")

    for (boo = 0; boo < secretword.length; boo++){
      if (secretword[boo] === guess){
        answer[boo] = guess;
        remainingletters--;
      }
    }
  }
}

parttwo()
