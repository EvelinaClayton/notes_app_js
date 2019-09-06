(function(exports){
  let assert = {
    isTrue: function(assertion){
      if (!assertion) {
        throw new Error (`Assertion failed: ${assertion} is not truthy`);
      } else {
        console.log(`Passed ${assertion}`);
      }
    }
  }
  exports.assert = assert;

  function noteSavesTheStringToTheTextVariable() {
    var note = new Note('My favorite language is JavaScript');

    assert.isTrue(note.text === 'My favorite language is JavaScript');
  };

  function NoteLength(){
    var note = new Note("This note has more than 20 characters.")
    if (note.text !="This note has more than 20 characters.") {
      throw "The text in the note is too long."
    }
  };

  exports.noteSavesTheStringToTheTextVariable = noteSavesTheStringToTheTextVariable;
})(this);


noteSavesTheStringToTheTextVariable();

