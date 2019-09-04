(function(exports) {
  
    function NoteList() {
        this.list = [];
    };
    
    NoteList.prototype.create = function(text) {
        this.list.push(new Note(text));
    };
    
    NoteList.prototype.view = function() {
        return this.list;
    }

    exports.NoteList = NoteList.prototype.constructor = NoteList;
})(this);
  