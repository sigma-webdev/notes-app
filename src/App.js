import "./App.css";
import { useState } from "react";

// components
import Filter from "./components/Filter";
import CreateNotes from "./components/CreateNotes";
import NotesListComponent from "./components/NotesListComponent";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("Notes")) || []
  );

  return (
    <div className="App">
      {/* navbar */}
      <nav className="flex justify-center items-center h-20 bg-[#f5ba13]">
        <div className="md:w-4/5 w-5/6 flex items-center justify-between">
          <p className="font-bold text-xl text-white">Notes App</p>
        </div>
      </nav>
      {/* navbar end */}
      <main className="flex justify-center">
        <div className="w-4/5  mt-10">
          <div className="flex  items-center justify-between">
            <Filter setNotes={setNotes} />
            {/* add new note button */}
            <CreateNotes notes={notes} setNotes={setNotes} />

            {/* add new note button end */}
          </div>
          {/* notes list component  */}
          {notes.map((note) => (
            <NotesListComponent
              key={note.id}
              note={note}
              notes={notes}
              setNotes={setNotes}
            />
          ))}
          {/*  notes list component end */}
        </div>
      </main>
    </div>
  );
}

export default App;
