let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

// calculator functionality
arr.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleInput(event.target.innerHTML);
  });
});

// function to handle input from both click and keyboard
function handleInput(inputValue) {
  playSound();
  if (inputValue === "=" || inputValue === "Enter") {
    try {
      string = eval(string);
      input.value = string;
    } catch (err) {
      input.value = "Error"; // handle errors
      string = "";
    }
  } else if (inputValue === "AC" || inputValue.toLowerCase() === "c") {
    string = "";
    input.value = string; // clear input
  } else if (inputValue === "DEL" || inputValue === "Backspace") {
    string = input.value.slice(0, -1); // delete last character
    input.value = string;
  } else if (
    "0123456789+-*/.".includes(inputValue) ||
    "00".includes(inputValue)
  ) {
    if (string.length >= 17) {
      string = eval(string); // evaluate it if too long
      input.value = string;
    }
    string += inputValue;
    input.value = string;
  }
}

// keyboard support
document.addEventListener("keydown", (event) => {
  handleInput(event.key);
});

// function to play a sound when button is clicked
function playSound() {
  const sound = document.getElementById("button-sound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
