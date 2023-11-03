import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";

function SideBar({ data, addGroup }) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <div className="menu">
      <div className="heading">
        <NavLink to="/">
          <h1>Pocket Notes</h1>
        </NavLink>
      </div>
      <button className="add" onClick={() => setShowModal(true)}>
        <p id="symbol">+</p>
        <p id="para">Create Notes group</p>
      </button>
      {showModal && (
        <Modal closeModal={closeModal} addGroup={(data) => addGroup(data)} />
      )}

      <div className="notes">
        {data?.map((group, index) => (
          <NavLink to={`/${group?.name}`} key={index}>
            <div key={group.id} className="notes-details">
              <div className=" icon" style={{ background: group.color }}>
                <p>{group.shortName}</p>
              </div>
              <div className="name">
                <p>{group.name}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
