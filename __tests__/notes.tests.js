const fs = require('fs');
const {
    createNewNote,
     findById,
     findByIdAndDelete
} = require('../lib/notes');
const { notes } = require('../data/notes.json');

jest.mock("fs");

test("Create a note object", () => {
    const note = createNewNote({
        title: "Hello",
        text: "Say hello",
        id: "ABC"
    }, notes);

    expect(note.title).toBe("Hello");
    expect(note.text).toBe("Say hello");
    expect(note.id).toBe("ABC");
});