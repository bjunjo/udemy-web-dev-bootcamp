// Ask the user "Are we there yet"
// Keep asking again and again until they enter "yes" OR "yeah"
// Then, alert "Yay, we finally made it!"
// this code only allows users to enter either "yes" OR "yeah", exactly
// while(true) {
//   var ans = prompt("Are we there yet")
//   if (ans === "yes" || ans === "yeah") {
//     alert("Yay, we finally made it!")
//     break;
//   } 
// }

var ans = prompt("are we there yet?")
while(ans.indexOf("yes") === -1) { // yes is not showing then do that
  var ans = prompt("are we there yet?");
}
alert("Yay, we finally made it!")
