import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NoteApp() {
  const { note } = useParams();
  const [content, setContent] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    const noteGroup = groups.find((group) => group.name === note);
    if (noteGroup && noteGroup.items) {
      setData(noteGroup.items);
    }
  }, [note]);

  const handleAdd = () => {
    if (!content) {
      return;
    }

    const newNote = {
      time: new Date().toLocaleString(),
      content: content,
    };

    setData([...data, newNote]);

    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    const updatedGroups = groups.map((group) => {
      if (group.name === note) {
        return {
          ...group,
          items: [...(group.items || []), newNote],
        };
      }
      return group;
    });

    localStorage.setItem("groups", JSON.stringify(updatedGroups));

    setContent("");
  };
  const handleTextareaKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };
  return (
    <>
      <div className="noteContainer">
        <div className="headerNote">
          <div className="roundIcon">{note?.substring(0, 2)}</div>
          <div className="roundName">{note}</div>
        </div>
        <div className="content-note">
          {data.map((note, index) => (
            <div className="contentNote" key={index}>
              <div
                className="time"
                style={{
                  width: "25%",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  flexDirection: "column",
                }}
              >
                <span>{note.time}</span>
              </div>
              <div className="description" style={{ width: "75%" }}>
                <p>{note.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="noteBoxText">
          <textarea
            name="text"
            id="textarea"
            placeholder="Enter your text here..........."
            onChange={(e) => setContent(e.target.value)}
            value={content}
            onKeyPress={handleTextareaKeyPress}
          ></textarea>

          <div className="btnSend">
            {/* <img src={vector.png} alt="Vector" /> */}
            <button onClick={() => handleAdd()}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteApp;
