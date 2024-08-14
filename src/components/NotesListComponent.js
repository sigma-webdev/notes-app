import React, { useEffect, useState, useRef } from "react";

function NotesListComponent({ note, notes, setNotes }) {
  const [currentNote, setCurrentNote] = useState(note);
  const [save, setSave] = useState(false);
  const noteRef = useRef(null);

  function saveCurrentNote(e) {
    e.preventDefault();
    const updatedNote = notes.map((e) => {
      if (e.id === currentNote.id) {
        return currentNote;
      } else {
        return e;
      }
    });

    setNotes(updatedNote);
    localStorage.setItem("Notes", JSON.stringify(updatedNote));
    setSave(false);
  }

  function ShowSaveButton() {
    if (
      currentNote.text !== note.text ||
      currentNote.title !== note.title ||
      currentNote.color !== note.color ||
      currentNote.isImportant !== note.isImportant
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }
  function handleDelete() {
    const updatedNotes = notes.filter((e) => e.id !== currentNote.id);
    setNotes(updatedNotes);
    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  }

  useEffect(() => {
    noteRef.current.style.backgroundColor = currentNote.color;
    ShowSaveButton();
  }, [currentNote]);

  return (
    <form
      className={`shadow-lg  p-6 rounded-lg relative  mt-8`}
      onSubmit={(e) => saveCurrentNote(e)}
      ref={noteRef}
    >
      {/* title input field */}
      <input
        className="outline-none block mb-4 bg-transparent w-full pr-6 text-gray-400"
        value={currentNote.title}
        type="text"
        placeholder="Title"
        required
        onChange={(e) => {
          setCurrentNote({ ...currentNote, title: e.target.value });
          ShowSaveButton();
        }}
      />
      {/* title input field end  */}

      {/* text input field */}
      <textarea
        className="outline-none bg-transparent w-full text-gray-400"
        value={currentNote.text}
        row="2"
        placeholder="Take a note"
        required
        onChange={(e) => {
          setCurrentNote({ ...currentNote, text: e.target.value });
          ShowSaveButton();
        }}
      />
      {/* text input field end */}

      <button
        className="absolute -bottom-3 left-3 bg-[#f5ba13]  p-2 rounded-full"
        onClick={() => handleDelete()}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
        </svg>
      </button>

      {/*  mark not as important  */}
      <div className=" absolute top-3 right-3">
        {/* if isimportant is true show filled star ⭐ else show unfilled start ✡️*/}
        {currentNote.isImportant ? (
          // fillded star
          <button type="button">
            <svg
              className="w-8 h-8 text-gray-800 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="orange"
              viewBox="0 0 22 20"
              onClick={(e) =>
                setCurrentNote({ ...currentNote, isImportant: false })
              }
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </button>
        ) : (
          // unfilled  star
          <button type="button">
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20"
              onClick={(e) =>
                setCurrentNote({ ...currentNote, isImportant: true })
              }
            >
              <path
                stroke="#f5ba13"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
              />
            </svg>
          </button>
          //
        )}
      </div>

      {/* select color */}
      <div className="flex gap-5 absolute -bottom-2 right-40 ">
        <button
          type="button"
          className="h-5 w-5 rounded-full shadow-md bg-orange-200"
          onClick={() =>
            setCurrentNote({ ...currentNote, color: "lightgoldenrodyellow" })
          }
        >
          {currentNote.color === "lightgoldenrodyellow" ? (
            <div className="h-2 w-2  m-auto   rounded-full   bg-white"></div>
          ) : null}
        </button>

        <button
          type="button"
          className="h-5 w-5 rounded-full    shadow-md    bg-green-300"
          onClick={() =>
            setCurrentNote({ ...currentNote, color: "lightgreen" })
          }
        >
          {currentNote.color === "lightgreen" ? (
            <div className="h-2 w-2  m-auto   rounded-full   bg-white"></div>
          ) : null}
        </button>
        <button
          type="button"
          className="h-5 w-5 rounded-full   shadow-md  bg-pink-300"
          onClick={() => setCurrentNote({ ...currentNote, color: "lightpink" })}
        >
          {currentNote.color === "lightpink" ? (
            <div className="h-2 w-2  m-auto   rounded-full   bg-white"></div>
          ) : null}
        </button>
        <button
          type="button"
          className="h-5 w-5 rounded-full shadow-md    bg-blue-300"
          onClick={() => setCurrentNote({ ...currentNote, color: "lightcyan" })}
        >
          {currentNote.color === "lightcyan" ? (
            <div className="h-2 w-2  m-auto   rounded-full   bg-white"></div>
          ) : null}
        </button>
        <button
          type="button"
          className="h-5 w-5 rounded-full   shadow-md  bg-gray-300"
          onClick={() => setCurrentNote({ ...currentNote, color: "lightgray" })}
        >
          {currentNote.color === "lightgray" ? (
            <div className="h-2 w-2  m-auto   rounded-full   bg-white"></div>
          ) : null}
        </button>
      </div>
      {/* add new note button */}
      {save ? (
        <button
          className="bg-[#f5ba13] absolute p-2 rounded-full  -bottom-4 right-20"
          type="submit"
        >
          <svg
            className="w-[25px] h-[25px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
        </button>
      ) : null}

      {/* add new note button end */}
    </form>
  );
}

export default NotesListComponent;
