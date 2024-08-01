import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import "./TodoForm.css";

const TodoForm = ({ notes, setNotes }) => {
  const [showInput, setShowInput] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [newNote, setNewNote] = useState({ title: "", text: "" });
  const [remainingChars, setRemainingChars] = useState(120);

  const [editingNoteIndex, setEditingNoteIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#FFF68B");
  const [showColorMenu, setShowColorMenu] = useState(false);

  const dragStartTime = useRef(0);
  const dragThreshold = 100;

  const colors = [
    "#FFAFA3",
    "#FFC470",
    "#FBD767",
    "#FFF68B",
    "#CDFC93",
    "#E6E6E6",
    "#FFBDF2",
    "#D9B8FF",
    "#80CAFF",
    "#71D7FF",
  ];

  const handleButtonClick = () => {
    setClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    setShowInput(true);
    setEditingNoteIndex(null);
  };

  const handleConfirm = () => {
    if (editingNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingNoteIndex] = {
        ...updatedNotes[editingNoteIndex],
        ...newNote,
      };
      setNotes(updatedNotes);
    } else {
      setNotes([
        ...notes,
        { ...newNote, x: clickPosition.x, y: clickPosition.y },
      ]);
    }
    setShowInput(false);
    setNewNote({ title: "", text: "" });
    setEditingNoteIndex(null);
  };

  const handleCancel = () => {
    setShowInput(false);
    setNewNote({ title: "", text: "" });
    setEditingNoteIndex(null);
  };

  const handleTitleChange = (event) => {
    const updatedTitle = event.target.value.slice(0, 20);
    setNewNote({ ...newNote, title: updatedTitle });
  };

  const handleTextChange = (event) => {
    const updatedText = event.target.value.slice(0, 120);
    const remainingChars = 120 - updatedText.length;
    setNewNote({ ...newNote, text: updatedText });
    setRemainingChars(remainingChars);
  };

  const handleEditNote = (index, event) => {
    const dragDuration = Date.now() - dragStartTime.current;
    if (dragDuration < dragThreshold) {
      setClickPosition({ x: notes[index].x, y: notes[index].y });
      setNewNote({ title: notes[index].title, text: notes[index].text });
      setEditingNoteIndex(index);
      setShowInput(true);
    }
  };

  const handleDeleteNote = (index, event) => {
    // Previene la propagazione dell'evento, evitando l'attivazione dell'editing
    event.stopPropagation();
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleDragStart = () => {
    dragStartTime.current = Date.now();
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setShowColorMenu(false);
  };

  return (
    <div className="App">
      <button className="btn__aggiungiNota" onClick={handleButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </button>
      {showInput && (
        <div className="overlay">
          <div
            className="input-section"
            style={{ top: clickPosition.y, left: clickPosition.x }}
          >
            <div style={{ textAlign: "center" }}>
              <h2>Dettagli</h2>
            </div>

            <div className="tipologia__hr">
              <div className="tipologia">
                <h3 style={{ fontSize: "12px" }}>Seleziona colore</h3>
                <div
                  className="color-selection"
                  onClick={() => setShowColorMenu(!showColorMenu)}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: selectedColor,
                      cursor: "pointer",
                    }}
                  />
                  {showColorMenu && (
                    <div className="color-menu">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            backgroundColor: color,
                            cursor: "pointer",
                            margin: "2px",
                          }}
                          onClick={() => handleColorSelection(color)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <hr style={{ borderColor: "black" }} />
            </div>

            <div className="testo__titolo">
              <input
                type="text"
                value={newNote.title}
                onChange={handleTitleChange}
                placeholder="Titolo"
                maxLength={20}
              />
            </div>

            <div className="testo__descrizione">
              <textarea
                value={newNote.text}
                onChange={handleTextChange}
                placeholder="Descrizione"
                maxLength={120}
              />
              <span
                style={{
                  fontSize: "10px",
                  position: "absolute",
                  bottom: 80,
                  right: 30,
                }}
              >
                {remainingChars}
              </span>
            </div>
            <div className="container__conferma">
              <button className="btn__annulla" onClick={handleCancel}>
                Annulla
              </button>
              <button className="btn__conferma" onClick={handleConfirm}>
                {editingNoteIndex !== null ? "Modifica" : "Conferma"}
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteNote(editingNoteIndex)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "red",
                }}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
      {notes.map((note, index) => (
        <Draggable
          key={index}
          onStart={handleDragStart}
          onStop={(e) => handleEditNote(index, e)}
        >
          <div
            className="note"
            style={{
              top: note.y,
              left: note.x,
              backgroundColor: note.color || "#FFF68B",
            }}
          >
            <span style={{ fontSize: "9px" }}>{note.title}</span>
            <span style={{ fontSize: "7px" }}>{note.text}</span>
            <div
              className="container-svg"
              onClick={() => handleEditNote(index)}
            >
              {colors[note.color] && (
                <svg
                  width="408"
                  height="408"
                  viewBox="0 0 408 408"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  dangerouslySetInnerHTML={{ __html: colors[note.color] }}
                />
              )}
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default TodoForm;
