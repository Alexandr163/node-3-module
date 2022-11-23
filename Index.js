const yargs = require("yargs")
const pkg = require("./package.json")

const { addNote, printNotes, removeNote} = require("./notes.controller")

yargs.version(pkg.version)

yargs.command({
    command: "add",
    describe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            discribe: "Note title",
            demandOption: true

        }
    },
    handler({ title }) {
        addNote(title)
    }
})

yargs.command({
    command: "list",
    describe: "Print all notes",
    async handler() {
        printNotes()
    }
})


yargs.command({
    command: "remove",
    discribe: "Remove note by id",
    builder: {
        id: {
            type: "string",
            discribe: "Note id",
            demandOption: true

        }
    },
    handler({ id }) {
        removeNote(id)
    }
})

yargs.parse()