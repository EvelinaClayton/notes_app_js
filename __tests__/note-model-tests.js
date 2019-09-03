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
})(this);

(function(exports){
  function noteSavesTheStringToTheTextVariable() {
    var note = new Note('My favorite language is JavaScript');

    assert.isTrue(note.text === 'My favorite language is JavaScript');
  };

  exports.noteSavesTheStringToTheTextVariable = noteSavesTheStringToTheTextVariable;
})(this);


noteSavesTheStringToTheTextVariable();