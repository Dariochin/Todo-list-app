import React, { useState } from "react";
import Draggable from "react-draggable";
import "./TodoForm.css";

const TodoForm = ({ notes, setNotes }) => {
  const [showInput, setShowInput] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [newNote, setNewNote] = useState({ title: "", text: "" });

  const handleButtonClick = () => {
    setClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    setShowInput(true);
  };

  const handleConfirm = () => {
    setNotes([
      ...notes,
      { ...newNote, x: clickPosition.x, y: clickPosition.y },
    ]);
    setShowInput(false);
    setNewNote({ title: "", text: "" }); // Clear state after confirmation
  };

  const handleCancel = () => {
    setShowInput(false);
    setNewNote({ title: "", text: "" }); // Clear state after cancellation
  };

  const handleTitleChange = (event) => {
    const updatedTitle = event.target.value.slice(0, 20); // Limit title to 20 chars
    setNewNote({ ...newNote, title: updatedTitle });
  };

  const handleTextChange = (event) => {
    const updatedText = event.target.value.slice(0, 120);
    const remainingChars = 120 - updatedText.length;
    setNewNote({ ...newNote, text: updatedText });
    setRemainingChars(remainingChars);
  };

  const [remainingChars, setRemainingChars] = useState(120);

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
                <h3 style={{ fontSize: "12px" }}>Seleziona tipologia</h3>
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
            <div>
              <input
                type="text"
                value={newNote.title}
                onChange={handleTitleChange}
                placeholder="Titolo"
                maxLength={20} // Display the maximum length as a hint
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
                Conferma
              </button>
            </div>
          </div>
        </div>
      )}
      {notes.map((note, index) => (
        <Draggable key={index}>
          <div
            className="note"
            style={{
              position: "absolute",
              top: note.y,
              left: note.x,
            }}
          >
            <span style={{ fontSize: "18px" }}>{note.title}</span>
            <span style={{ fontSize: "14px" }}>{note.text}</span>
            <div
              className="container-svg"/* 
              onClick={(event) => {
                setClickPosition({ x: event.clientX, y: event.clientY });
                setShowInput(true);
              }} */
            >
              <svg
                width="300"
                height="300"
                viewBox="0 0 500 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.1" filter="url(#filter0_f_198_107)">
                  <path
                    d="M78 30.903C74.8 257.658 41 329.575 30 404.243H73.5L78 30.903Z"
                    fill="black"
                  />
                </g>
                <g opacity="0.3" filter="url(#filter1_f_198_107)">
                  <path
                    d="M94.5 79.8253L72 400.176L97 400.68L94.5 79.8253Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter2_d_198_107)">
                  <path
                    d="M481 20.4004C446.655 20.0054 208.769 18.5902 94.1196 17.932C90.9247 42.0231 90.7916 287.97 91.1244 407.932C134.255 407.932 367.681 407.603 479.003 407.438C477.805 370.709 479.835 134.109 481 20.4004Z"
                    fill="#FFF68B"
                  />
                </g>
                <path
                  opacity="0.02"
                  d="M481 20.4975C446.567 20.4186 209.073 18.0635 94.1291 17.932C93.0026 38.6665 92.5 63.9564 92 95.8436C135.242 95.8436 368.393 95.959 480 95.9261C480.5 73.4474 480.501 43.2522 481 20.4975Z"
                  fill="#222222"
                />
                <defs>
                  <filter
                    id="filter0_f_198_107"
                    x="0"
                    y="0.902954"
                    width="108"
                    height="433.34"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="15"
                      result="effect1_foregroundBlur_198_107"
                    />
                  </filter>
                  <filter
                    id="filter1_f_198_107"
                    x="52"
                    y="59.8253"
                    width="65"
                    height="360.854"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="10"
                      result="effect1_foregroundBlur_198_107"
                    />
                  </filter>
                  <filter
                    id="filter2_d_198_107"
                    x="85"
                    y="17.932"
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