const router = require('express').Router();
const { createNewNote, findById, findByIdAndDelete } = require("../lib/notes");
const { notes } = require("../data/notes.json");
const uniqid = require('uniqid');
const path = require('path');

router.get('/', (req, res) => {
    res.send(notes);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = findById(id, notes);
    res.send(result);
});

router.post('/', (req, res) => {
    req.body.id = uniqid();
    const note = createNewNote(req.body, notes); //
    res.json(note);
});

router.delete('/:id', (req, res) => {
   const { id } = req.params;
   const result = findByIdAndDelete(id, notes);
   res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = router;