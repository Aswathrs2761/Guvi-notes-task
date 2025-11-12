import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NoteDialog from "./Components/NoteDialog";

// Context for dialog
const DialogBoxContext = createContext();
export const useDialogBox = () => useContext(DialogBoxContext);

function App() {
  const [open, setOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);

  const openCreate = (note) => {
    setEditNote(note || null);
    setOpen(true);
  };
  const closeCreate = () => {
    setOpen(false);
    setEditNote(null);
  };

  return (
    <DialogBoxContext.Provider value={{ open, openCreate, closeCreate, editNote }}>
      {/* <BrowserRouter> */}
        <div className="min-h-screen flex flex-col"> {/* Flex container */}
          <Nav /> {/* Passes openCreate via context */}
          <div className="grow">
            {/* <Routes> */}
              {/* <Route path="/" element={<Home />} /> */}
              <Home />
            {/* </Routes> */}
          </div>
          <Footer />
          <NoteDialog /> {/* Always rendered, visibility via open state */}
        </div>
      {/* </BrowserRouter> */}
    </DialogBoxContext.Provider>
  );
}

export default App;
