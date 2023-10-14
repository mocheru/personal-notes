import React from "react";

function NotesAppHeader() {
  return (
    <div className="note-app__header">
      <h1>MyNotes</h1>
      <form className="note-search">
        <input type="text" placeholder="Search Notes ..." name="search" />
      </form>
    </div>
  );
}

export default NotesAppHeader;
