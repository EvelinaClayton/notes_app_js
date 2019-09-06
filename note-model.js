(function(exports) {
  function Note(text) {
    this.text = text;
  };
  
  Note.prototype = {
    displayText: function () {
      var div = document.createElement('div')
      div.innerText = this.text;
      return div
    }
  }
  exports.Note = Note.prototype.constructor = Note;
  // exports.Note = Note;

  // Note.prototype._shorten = function(text) {
  //   return text.substring(0, 20);
})(this);
