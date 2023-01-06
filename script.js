import { WORDS } from "./words.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(rightGuessString);

// global variables that will be used for the game (app)
// rightGuessString picks a random word from the array WORDS as the right guess for this round
// console.log to debug if necessary

//  *** The game board ***

const initBoard = () => {
  let board = document.getElementById("game-board");

  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    let row = document.createElement("div");
    row.className = "letter-row";

    for (let j = 0; j < 5; j++) {
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }
    board.appendChild(row);
  }
};

initBoard();

// creates 1 row for each guess && 5 boxes for each row
// the function makes them all children of the row.
// it then adds each row to the board container
// each row is given the class letter-row
// each box is assigned letter-box

// accept user input
// deleteLetter(), checkGuess(), insertLetter() defined below
//
document.addEventListener("keyup", (e) => {
  if (guessesRemaining === 0) {
    return;
  }

  let pressedKey = String(e.key);
  if (pressedKey === "Backspace" && nextLetter !== 0) {
    deleteLetter();
    return;
  }

  if (pressedKey === "Enter") {
    checkGuess();
    return;
  }

  let found = pressedKey.match(/[a-z]/gi);
  if (!found || found.length > 1) {
    return;
  } else {
    insertLetter(pressedKey);
  }
});

const insertLetter = (pressedKey) => {
  if (nextLetter === 5) {
    return;
  }

  pressedKey = pressedKey.toLowerCase();

  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  let box = row.children[nextLetter];
  animateCSS(box, "pulse");
  box.textContent = pressedKey;
  box.classList.add("filled-box");
  currentGuess.push(pressedKey);
  nextLetter += 1;
};

// deleteLetter func

const deleteLetter = () => {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  console.log(row);
  let box = row.children[nextLetter - 1];
  box.textContent = "";
  box.classList.remove("filled-box");
  currentGuess.pop();
  nextLetter -= 1;
};

// deleteLetter gets the correct row, finds the last box and empties it
// resets the nextLetter counter

const checkGuess = () => {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  let guessString = "";
  let rightGuess = Array.from(rightGuessString);

  for (const val of currentGuess) {
    guessString += val;
  }

  if (guessString.length != 5) {
    toastr.error("Not enough letters!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    let letterColor = "";
    let box = row.children[i];
    let letter = currentGuess[i];

    let letterPosition = rightGuess.indexOf(currentGuess[i]);
    // is letter in the correct guess

    if (letterPosition === -1) {
      letterColor = "grey";
    } else {
      if (currentGuess[i] === rightGuess[i]) {
        letterColor = "green";
      } else {
        letterColor = "yellow";
      }
      rightGuess[letterPosition] = "#";
    }
    let delay = 250 * i;
    setTimeout(() => {
      //flip box
      animateCSS(box, "flipInX");
      //shade boxs
      box.style.backgroundColor = letterColor;
      shadeKeyBoard(letter, letterColor);
    }, delay);
  }

  if (guessString === rightGuessString) {
    toastr.success("you guessed right!");
    guessesRemaining = 0;
    return;
  } else {
    guessesRemaining -= 1;
    currentGuess = [];
    nextLetter = 0;

    if (guessesRemaining === 0) {
      toastr.error("out of guesses");
      toastr.info(`the correct word was ${rightGuessString} `);
    }
  }
};

// check guess function does a few bits of things
/*
    - there are 5 letters
    - guess is a valid list
    - check each letter of the word and shades them
    - lets users know when the game ends


    # this algorithm decides what color to shade each letter

    - checks if the letter is in the correct word
    - shade grey if letter is not in word
    = shade yellow if the letter is in the incorrect position
    - shade green if the letter is in the correct position
*/

// shadeKeyboard

const shadeKeyBoard = (letter, color) => {
  for (const elem of document.getElementsByClassName("keyboard-button")) {
    if (elem.textContent === letter) {
      let oldColor = elem.style.backgroundColor;
      if (oldColor === "green") {
        return;
      }

      if (oldColor === "yellow" && color !== "green") {
        return;
      }

      elem.style.backgroundColor = color;
      break;
    }
  }
};

// if the key is already green do nothing
// if the key is currently yellow, only allow it to become green
// else, shade the key passed to the function

// On-screen keyboard generate input

// dispatch a key up event whenever any key on-screen keyboard is clicked

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
  const target = e.target;

  if (!target.classList.contains("keyboard-button")) {
    return;
  }

  let key = target.textContent;

  if (key === "Del") {
    key = "Backspace";
  }

  document.dispatchEvent(new KeyboardEvent("keyup", { key: key }));
});

// how to add animation

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element;
    node.style.setProperty("--animate-duration", "0.3s");

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
