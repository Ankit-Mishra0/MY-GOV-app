import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Notes({ notes = [], selectedCategory, doLike, likeIt }) {
  const location = useLocation();

  const filteredNotes =
    location.pathname === "/opinion"
      ? notes // Show all notes on /opinion
      : selectedCategory
      ? notes.filter((note) => note.category === selectedCategory)
      : notes;

  return (
    <div className="newDiv">
      {filteredNotes.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        filteredNotes.map((note) => (
            <div className="note" key={note.id}>
              <div className="nameBox">
                <h3>{note.name}</h3>
              </div>
              <div className="actionBox">
                <p>{note.text}</p>
              </div>
              {/* Like button & category in one row */}
              <div className="noteFooter">
                <p className="category">{note.category}</p>
                <div className="likeButton">
                  <button onClick={() => likeIt(note.id)}>
                    {doLike[note.id] ? "❤️" : "♡"}
                  </button>
                </div>
              </div>
            </div>
         
        ))
      )}
    </div>
  );
}

export default Notes;
