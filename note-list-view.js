(function(exports) {
  
  function NoteListView(model) {
      this.noteListModel = model
  };
  
  NoteListView.prototype.view = function() {
    let note_texts = this.noteListModel.view().map(function(note) {
      return `<li><div>${note.text}</div><li>`
    });
   
    return `<ul>${note_texts.join("")}</ul>`
  }

  exports.NoteListView = NoteListView.prototype.constructor = NoteListView;
})(this);





    // From line 11: This needs to be tided up
    // Use localhost as a guide
    // Remove all ',' from the string
    // Remove blank list elements.