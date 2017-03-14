var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
  //handle input
  if (input === "list"){
    listTodos();
  } else if(input === "new"){
    // ask for new todo
    addTodos();
  } else if(input === "delete"){
    deleteTodos();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");

function listTodos(){
  todos.forEach(function(todo, i){
    console.log("*************");
    console.log(i + ": "+todo);
  });
  console.log("*************");
}

function addTodos(){
  // ask for new todo
  var newTodo = prompt("Enter new todo");
  // add t0 todos array
  todos.push(newTodo);
  console.log("Added todo")
}

function deleteTodos(){
  // ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  // delete todos
  //splice
  todos.splice(index,1);
  console.log("Item " + index + " deleted")
}