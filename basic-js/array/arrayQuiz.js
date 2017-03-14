//Write a function that takes an array as an arugment and print out the elemtent in the array in reverse order(don't actually reverse the array itself)
function printReverse(array){
  var newArray = array.reverse();
  newArray.forEach(function(item){
      console.log(item);
    });
} //end printReverse(array);

// http://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
function isUniform(array){
  var first = array[0]
  return array.every(function(element){
    return element === first;
    });
}

function sumArray(array){
  //add each item in an array
  //have a variable that holds total value of the array
  var total = 0;
  //starting value
  //add each itme in the array
  for(var i = 0; i < array.length; i++){
  total = total + array[i]  
  }
  return total 
}

function max(arr){
  var maxVal = arr[0];
  //find a max value in array
  //compare each element in array
  for(var i = 1; i < arr.length; i++){
    if(maxVal < arr[i]){
      maxVal = arr[i]
    } else {
      break;
    }
  }
  return maxVal;
}