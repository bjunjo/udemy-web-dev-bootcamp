function isEven(x) {
  if (x % 2 === 0) return true;
    else return false
}

// while-loop
// https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38#.syzdge9il
function factorial(num) {
  var result = num
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
}

// Write a function that takes a single kebab-cased string argument and returns the snake_cased version
// kebabToSnake("hello-world") = "hello_world"
function kebabToSnake(string) {
  var newString = string.replace(/-/g, '_');
  return newString;
}