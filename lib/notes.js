const fs = require('fs');
 const path = require('path');

 const createNewNote = (body, notesArray) => {
     const note = body;
     notesArray.push(note);
     fs.writeFileSync(
         path.join(__dirname, '../data/notes.json'),
         JSON.stringify({ notes: notesArray }, null, 2)
     );
     return note;
 }

 const findById = (id, notesArray) => {
     const result = notesArray.filter(note => note.id === id);

     return result;
 }

 module.exports = {
     createNewNote,
     findById
 }