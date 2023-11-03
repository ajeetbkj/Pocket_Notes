import React, { useState } from "react";
import "./modal.scss";

const Modal = ({ closeModal, addGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleCreateGroup = (e) => {
    e.preventDefault();
    

    if (groupName.trim() === "") {
      return;
    }

    if (groupName && setGroupName) {
      const newGroup = {
        name: groupName,
        color: selectedColor,
        items: [],
        id: new Date().toString(),
      };

      addGroup(newGroup);

      closeModal();
    } else {
      closeModal();
    }
  };

  return (
    <>
      <div className="modal-wrapper" onClick={() =>closeModal()}></div>
      <div className="modal-container">
        <div className="modal">
          <div className="title">
            <h1>Create New Notes Group</h1>
          </div>
          <div className="form">
            <form onSubmit={handleCreateGroup}>
              <label>Group Name</label>
              <input
                type="text"
                placeholder="Enter your group name..."
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
              />
              <br />
              <div className="color-box">
                <label>Choose Color</label>

                <div className="colors">
                  <p
                    id="purple"
                    className={selectedColor === "purple" ? "selected" : ""}
                    onClick={() => handleColorSelect("purple")}
                  ></p>
                  <p
                    id="pink"
                    className={selectedColor === "pink" ? "selected" : ""}
                    onClick={() => handleColorSelect("pink")}
                  ></p>
                  <p
                    id="green"
                    className={selectedColor === "green" ? "selected" : ""}
                    onClick={() => handleColorSelect("green")}
                  ></p>
                  <p
                    id="orange"
                    className={selectedColor === "orange" ? "selected" : ""}
                    onClick={() => handleColorSelect("orange")}
                  ></p>
                  <p
                    id="blue"
                    className={selectedColor === "blue" ? "selected" : ""}
                    onClick={() => handleColorSelect("blue")}
                  ></p>
                  <p
                    id="skyblue"
                    className={selectedColor === "skyblue" ? "selected" : ""}
                    onClick={() => handleColorSelect("skyblue")}
                  ></p>
                </div>
              </div>
              <div className="buttons">
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
