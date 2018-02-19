let todos = [];

let input = prompt("What do you need to do?");

while (input !== "quit") {
//handle input
  if (input === "list") {
  listToDo();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
  }
//ask again for new input
input = prompt("What do you need to do?");
}
alert("Ok, you QUIT the app");


function listToDo() {
  console.log("**********");
  todos.forEach(function(item, i){
    console.log(i + ": " + item);
  });
  console.log("**********");
};
function addToDo() {
  //ask for new toDo
  let newToDo = prompt("Enter new To-Do");
  console.log(newToDo);
    //add to todos array
  todos.push(newToDo);
  console.log("Added New To Do");
};

function deleteToDo () {
  //as for index of item to be deleted
  let index = prompt("Enter index of item to be deleted");
  //delete item from List
  todos.splice(index, 1);
  console.log("Deleted to-do");
};
