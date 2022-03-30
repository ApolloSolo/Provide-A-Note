const express = require('express');
const app = express();
const PORT = 3000;
const { notes } = require("./data/notes.json");
const uniqid = require('uniqid');
const path = require('path');
const { createNewNote, findById } = require("./lib/notes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/notes', (req, res) => {
    res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const result = findById(id, notes);
    res.send(result);
}) //

app.post('/api/notes', (req, res) => {
    req.body.id = uniqid();
    const note = createNewNote(req.body, notes);
    res.json(note);
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})