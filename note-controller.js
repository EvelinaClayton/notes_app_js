// Creating a new List:
  var list = new NoteList
// Adding new notes:
  list.create('note')
  list.create('second')
  list.create('third')
// list.view()
// console.log(list.view())
  
// Creating a new View:
  var view = new NoteListView(list)
// view.view()
// console.log(view.view())

// Injecting into the app div above:
  window.onload = function what(){
    document.getElementById("app").innerHTML = view.view()
  };