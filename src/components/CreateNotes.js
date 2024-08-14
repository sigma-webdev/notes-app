import { v4 as uuidv4 } from "uuid";
function CreateNotes({ notes, setNotes }) {
  function handleCreateNote(e) {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      title: "",
      text: "",
      color: "lightgoldenrodyellow",
      isImportant: false,
      date: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
  }

  return (
    <button
      className="bg-[#f5ba13]  p-2 rounded-full "
      type="button"
      onClick={(e) => handleCreateNote(e)}
    >
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
      </svg>
    </button>
  );
}

export default CreateNotes;
