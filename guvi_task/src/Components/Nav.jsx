import React from "react";
import { Link } from "react-router-dom";
import { useDialogBox } from "../App";

const Nav = () => {
  const { openCreate } = useDialogBox();
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/03/samsung-notes-logo.png" className="h-12" alt="QuickNotes Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">QuickNotes</span>
        </Link>
        <div>
          <button
            type="button"
            onClick={() => openCreate()}
            className="text-black bg-yellow-400 hover:bg-red-700 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-md px-6 py-3 dark:bg-yellow-400 dark:hover:bg-red-600 dark:focus:ring-blue-800 transition-all duration-200"
          >
            Add Note
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
