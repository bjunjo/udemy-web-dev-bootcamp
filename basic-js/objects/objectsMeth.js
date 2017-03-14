var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x, y){
    return x + y;
  }
}

console.log(obj.add(10,5)); // function as a property in JS objects

// Why? prevent namespace collision (Make them not conflict!)
// undersocre.js