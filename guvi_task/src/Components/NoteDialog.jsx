import React, { useEffect, useState } from "react";
import { useDialogBox } from "../App";
import { getNotes, saveNotes } from "../utils/storage";

const NoteDialog = () => {
  const { open, closeCreate, editNote } = useDialogBox();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setTags(editNote.tags || []);
    } else {
      setTitle("");
      setContent("");
      setTags([]);
      setTagInput("");
    }
  }, [editNote, open]);

  if (!open) return null;

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleCreateOrUpdate = () => {
    let notes = getNotes();
    if (editNote) {
      notes = notes.map(n =>
        n.id === editNote.id
          ? { ...n, title, content, tags }
          : n
      );
    } else {
      const newNote = {
        id: Date.now().toString(),
        title,
        content,
        tags,
        status: "active"
      };
      notes = [newNote, ...notes];
    }
    saveNotes(notes);
    closeCreate();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-[90%] max-w-lg p-6 relative">
        <button onClick={closeCreate} className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl">✕</button>
        <h2 className="text-2xl font-semibold mb-5 dark:text-white">{editNote ? "Edit Note" : "Create New Note"}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Title</label>
            <input type="text" placeholder="Enter note title..." value={title} onChange={e => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Content</label>
            <textarea rows="5" placeholder="Enter note content..." value={content} onChange={e => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Tags</label>
            <div className="flex gap-2">
              <input type="text" placeholder="Add a tag and press Enter..." value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleAddTag()}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600" />
              <button onClick={handleAddTag} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500">Add</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-3">
          <button onClick={closeCreate} className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">Cancel</button>
          <button onClick={handleCreateOrUpdate} className="px-5 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 font-semibold text-black">
            {editNote ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDialog;
