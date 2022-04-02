const fs = require("fs");
const { createNewNote, findById, findByIdAndDelete } = require("../lib/notes");
const { notes } = require("../data/notes.json");

jest.mock("fs");

test("Create a note object", () => {
  const note = createNewNote(
    {
      title: "Hello",
      text: "Say hello",
      id: "ABC",
    },
    notes
  );

  expect(note.title).toBe("Hello");
  expect(note.text).toBe("Say hello");
  expect(note.id).toBe("ABC");
});

test("Find note by id", () => {
  const startingNotes = [
    {
      title: "Hello",
      text: "Say hello",
      id: "ABC",
    },
    {
      title: "Goodbye",
      text: "Say goodbye",
      id: "XYZ",
    },
  ];

  const result = findById("XYZ", startingNotes);

  expect(result.title).toBe("Goodbye");
});

test("Sould return value greater than -1 if object is found in array", () => {
    const startingNotes = [
        {
          title: "Hello",
          text: "Say hello",
          id: "ABC",
        },
        {
          title: "Goodbye",
          text: "Say goodbye",
          id: "XYZ",
        },
      ];

      const index1 = findByIdAndDelete("ABC", startingNotes);
      const index2 = findByIdAndDelete("LMN", startingNotes);

      expect(index1).toBeGreaterThanOrEqual(0);
      expect(index2).toBe(-1);
})