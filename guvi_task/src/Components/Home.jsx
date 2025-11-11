import React, { useEffect, useState } from "react";
import { getNotes, saveNotes } from "../utils/storage";
import { useDialogBox } from "../App";
import { FaTrash } from "react-icons/fa";   // Font Awesome trash icon
import { faTrash, faBoxArchive, faEdit, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TABS = [
  { key: "active", label: "Active" },
  { key: "archived", label: "Archived" },
  { key: "trash", label: "Trash" },
];

const Home = () => {
  const { open, openCreate } = useDialogBox();
  const [notes, setNotes] = useState([]);
  const [tab, setTab] = useState("active");

  useEffect(() => {
    setNotes(getNotes());
  }, [open]);

  const handleDelete = id => {
    const updatedNotes = notes.map(n => n.id === id ? { ...n, status: "trash" } : n);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const handleArchive = id => {
    const updatedNotes = notes.map(n => n.id === id ? { ...n, status: "archived" } : n);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const handleRestore = id => {
    const updatedNotes = notes.map(n => n.id === id ? { ...n, status: "active" } : n);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const handlePermanentDelete = id => {
    const updatedNotes = notes.filter(n => n.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const notesToShow = notes.filter(n => n.status === tab);

  return (
    <div className="max-w-2xl mx-auto p-12">
      {/* Tabs */}
      <div className="flex gap-4 mb-8 justify-center">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            className={`px-6 py-2 rounded-full border font-bold ${tab === key ? "bg-yellow-400" : "bg-gray-100"}`}
            onClick={() => setTab(key)}
          >
            {label} ({notes.filter(n => n.status === key).length})
          </button>
        ))}
      </div>
      {/* Main List */}
      {notesToShow.length === 0 ? (
        <div className="py-20 text-center text-xl text-gray-600 flex flex-col items-center">
          <svg width="50" height="60" fill="none" stroke="#a3a3a3"><rect width="40" height="50" x="5" y="5" rx="6" strokeWidth="2"/><line x1="12" y1="20" x2="33" y2="20" stroke="#a3a3a3" strokeWidth="2"/></svg>
          <div className="mt-6 font-bold">No notes found</div>
          <div className="text-gray-400 mt-2">Create your first note to get started!</div>
        </div>
      ) : (
        <div className="space-y-6">
          {notesToShow.map(note => (
            <div key={note.id} className="bg-white rounded-xl p-5 shadow flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold">{note.title}</div>
                  <div className="text-gray-500">{note.content}</div>
                  <div className="mt-1 flex gap-2 flex-wrap">
                    {note.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  {tab === "active" && (
                    <>
                      <button onClick={() => openCreate(note)} className="text-blue-500 hover:text-blue-700"><FontAwesomeIcon icon={faEdit} className="text-2xl" /></button>
                      <button onClick={() => handleArchive(note.id)} className="text-blue-600 hover:underline">      <FontAwesomeIcon icon={faBoxArchive} className="text-yellow-500 hover:text-yellow-700 text-2xl" />
                      </button>
                      <button onClick={() => handleDelete(note.id)} className="text-red-500 hover:text-red-700"><FaTrash size={20} />
                      </button>
                      

                    </>
                  )}
                  {tab === "archived" && (
                    <>
                      <button onClick={() => handleRestore(note.id)} className="text-teal-500 hover:text-teal-700 text-2xl"><FontAwesomeIcon icon={faTrashRestore} /></button>
                      <button onClick={() => handleDelete(note.id)} className="text-red-500 hover:text-red-700 text-2xl"><FaTrash size={20} /></button>
                    </>
                  )}
                  {tab === "trash" && (
                    <>
                      <button onClick={() => handleRestore(note.id)}  className="text-teal-500 hover:text-teal-700 text-2xl"><FontAwesomeIcon icon={faTrashRestore} /></button>
                      <button onClick={() => handlePermanentDelete(note.id)} className="text-red-500 hover:text-red-700 text-2xl"><FaTrash size={20} /></button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
