import React, { useState } from "react";

function Filter({ setNotes }) {
  const [title, setTitle] = useState("");

  function handleFilter(e) {
    e.preventDefault();

    const notes = JSON.parse(localStorage.getItem("Notes"));

    const filteredNotes = notes.filter((note) => {
      if (title) {
        return note.title.match(title);
      } else {
        return true;
      }
    });

    setNotes(filteredNotes);
  }

  return (
    <form className="flex gap-5 " onSubmit={(e) => handleFilter(e)}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block   min-w-[300px] p-4 pl-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 outline-none  focus:border-yellow-500 "
          placeholder="Search notes by Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5   font-bold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Filter;
