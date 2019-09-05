// Creating a new List:
  var list = new NoteList
// Adding new notes:
  list.create('first note')
  list.create('second note')
  list.create('third note')
// list.view()
// console.log(list.view())
  
// Creating a new View:
  var view = new NoteListView(list)
// view.view()
// console.log(view.view())
var note = new Note("text")
var singleView = new SingleNoteView(note)
// Injecting into the app div above:
  window.onload = function what(){
    document.getElementById("app").innerHTML = view.view()
    document.getElementById("single_view").innerHTML = singleView.view()
  };