import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import "./TodoForm.css";

const TodoForm = ({ notes, setNotes }) => {
  const [showInput, setShowInput] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [newNote, setNewNote] = useState({ title: "", text: "" });
  const [remainingChars, setRemainingChars] = useState(120);
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);
  const dragStartTime = useRef(0);
  const dragThreshold = 100;

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

  const handleDragStart = () => {
    dragStartTime.current = Date.now();
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
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#ffff00",
                    cursor: "pointer",
                  }}
                />
              </div>
              <hr
                style={{
                  borderColor: "black",
                }}
              />
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
              }}
            >
              <span style={{ fontSize: "9px" }}>{note.title}</span>
              <span style={{ fontSize: "7px" }}>{note.text}</span>
              <div
                className="container-svg"
                onClick={() => handleEditNote(index)}
              >
                <svg
                  width="408"
                  height="408"
                  viewBox="0 0 408 408"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_198_107)">
                    <path
                      d="M399 9.40036C364.655 9.00542 126.769 7.59023 12.1196 6.93201C8.92468 31.0231 8.79156 276.97 9.12436 396.932C52.2553 396.932 285.681 396.603 397.003 396.438C395.805 359.709 397.835 123.109 399 9.40036Z"
                      fill="#FFF68B"
                    />
                  </g>
                  <path
                    opacity="0.02"
                    d="M399 9.49754C364.567 9.41864 127.073 7.0635 12.1291 6.93201C11.0026 27.6665 10.5 52.9564 10 84.8436C53.2415 84.8436 286.393 84.959 398 84.9261C398.5 62.4474 398.501 32.2522 399 9.49754Z"
                    fill="#222222"
                  />
                  <defs>
                    <filter
                      id="filter0_d_198_107"
                      x="3"
                      y="6.93201"
                      width="400"
                      height="400"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-1" dy="5" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_198_107"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_198_107"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </Draggable>
        ))}
    </div>
  );
};

export default TodoForm;
