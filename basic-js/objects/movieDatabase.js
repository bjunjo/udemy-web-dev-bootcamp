// var movie = {
//   title : ["In Bruges", "Frozen", "Mad Max Fury Road", "Les Miserables"],
//   rate  : [5, 4.5, 5, 3.5],
//   haveWatched : [true, false, true, false]
// };

// // Increment index number for array
// for(var i = 0; i < movie.title.length; i++) {
//   // if haveWatched true then
//   if(movie.haveWatched[i] === true) { 
//     console.log("You have watched \"" + movie.title[i] + "\" - " + movie.rate[i] + " stars"); // print out "You have watched..."
//   } else {
//     console.log("You haven't seen \"" + movie.title[i] + "\" - " + movie.rate[i] + " stars"); // if not, print out "You haven't seen..."
//   }
// }

// Solution
var movies = [
  {
    title: "In Burgers",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Frozen",
    hasWatched: false,
    rating: 4.5
  },
  {
    title: "Les Miserables",
    hasWatched: false,
    rating: 3.5
  }
]

function buildString(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - "
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
});