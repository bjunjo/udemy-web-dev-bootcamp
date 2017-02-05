var correctAns = 7;
var userAns = prompt("Guess number");

if (userAns > correctAns) {
  alert("Too high!");
} else if (userAns < correctAns) {
  alert("Too low!");
} else {
  alert("Yay!");
}