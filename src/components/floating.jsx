import React, { useState, useRef, useEffect } from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useLocation } from "react-router-dom"; //  Import useLocation

function Menu({ addNote }) {
  const location = useLocation(); //  Get category from navigation state
  const [showForm, setShowForm] = useState(location.state?.category || null); // Set initial form based on category
  const secondInputRef = useRef(null);

  const [formData, setFormData] = useState({
    party: "",
    input: "",
    category: showForm, // Store category
  });

  useEffect(() => {
    if (location.state?.category) {
      setShowForm(location.state.category); //  Update form if category changes
      setFormData((prev) => ({ ...prev, category: location.state.category }));
    }
  }, [location.state]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevVal) => ({ ...prevVal, [name]: value }));
  }

  function handleKeyDown(event, inputName) {
    if (inputName === "party" && event.key === "Enter") {
      event.preventDefault();
      secondInputRef.current?.focus();
    } else if (inputName === "input" && event.key === "Enter") {
      if (!event.shiftKey) {
        event.preventDefault();
        SubmitForm(event);
      }
    }
  }

  function SubmitForm(event) {
    event.preventDefault();

    if (formData.party.trim() && formData.input.trim()) {
      addNote({
        id: Date.now(),
        name: formData.party,
        text: formData.input,
        category: showForm, // Store category (Complaint, Feedback, Advice)
      });
    }

    setFormData({ party: "", input: "" });
  }

  return (
    <div className="floating-container">
      {showForm && (
        <form className="menuForm">
          <h2>{showForm}</h2>
          <input
            className="menuFormInput"
            type="text"
            name="party"
            value={formData.party}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, "party")}
            placeholder="Enter party name / Leader name.."
          />
          <textarea
            className="menuFormInput"
            name="input"
            ref={secondInputRef}
            value={formData.input}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, "input")}
            placeholder={`Enter your ${showForm.toLowerCase()} here`}
          />
          <Fab onClick={SubmitForm} type="submit" className="complaint-button">
            <ArrowUpwardIcon />
          </Fab>
        </form>
      )}
    </div>
  );
}

export default Menu;
