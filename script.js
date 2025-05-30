var g = 0;
var words = [
  "penguin", "hangman", "universe", "treehouse", "vacation", "inside", "yellow",
  "school", "everybody", "clock", "book", "animal", "human", "overall",
  "rainbow", "fireplace", "pumpkin", "dogtoy", "waterfall", "slippers", "weasel",
  "beanbag", "rocketship", "family", "hamster", "light", "scared", "intergalactic",
  "tomorrow", "recces", "vacine", "covid19", "magical"
];

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = Array(word.length).fill("_");
var remainingLetters = word.length;

console.log("Welcome to Hangman! Type `play()` to start playing.");

function play() {
  while (remainingLetters > 0) {
    let guess = prompt("Guess a letter (or full word), or type 'hint'.\n" + answerArray.join(" "));

    if (guess === null) {
      if (confirm("Are you sure you want to quit?")) {
        alert("Thanks for playing!");
        return;
      } else {
        continue;
      }
    }

    guess = guess.toLowerCase();

    if (guess === "hint") {
      g++;
      let revealed = false;
      while (!revealed) {
        let tr = word[Math.floor(Math.random() * word.length)];
        if (!answerArray.includes(tr)) {
          alert("Hint letter: " + tr);
          revealed = true;
        }
      }
    } else if (guess === word) {
      alert("Correct! You guessed the word.");
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
      continue;
    } else {
      g++;
      let correctGuess = false;
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
          answerArray[j] = guess;
          remainingLetters--;
          correctGuess = true;
        }
      }
      if (!correctGuess) {
        alert("Incorrect guess.");
      }
    }
  }

  alert("Word: " + answerArray.join(" "));
  alert("Guesses: " + g);
  alert("Game over! The word was: " + word);
}
