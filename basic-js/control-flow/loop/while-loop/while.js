// JS while loop exercises

// Ex 1
// start with 1
var num = 1; 
// while the num is less than or equal to 10
while(num <= 10) {
  // print number
  console.log(num);
  // and number inrements by 2 each time
  num += 2; 
} 
// so it prints out odd numbers: 1, 3, 5, 7, 9

// Ex 2
// start with 1
var num = 1
// while the num is less than or euqal to 20
while(num <= 20) {
  // if the num is divisible 
  if(num % 4  === 0){
    // print out nubmers
    console.log(num);
  }
  // it increments by 1
  num++;
}

// so it prints out 4, 8, 12, 16, 20, mutiples of '4'

// Ex 3
// the number starts with 100
var num = 100;
// while the number is less than 150
while(num < 150) {
  // print out the number + 1
  console.log(num + 1);
  // the number decreaments by 1 each time
  num--;
}

// My guess: it prints out the number from 100 to 1
// console: nope, it goes to negative numbers, infinitly
// infinite loop