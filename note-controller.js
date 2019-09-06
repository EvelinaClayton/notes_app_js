// Creating a new List:
document.getElementById("create_button").onclick = function() {
  var textArea = document.getElementById("note_input");
  var text = textArea.value; 
  var note = new Note(text);
  var displayNote = note.displayText();
  var notesDiv = document.getElementById("notes");
  notesDiv.appendChild(displayNote);
  
}


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