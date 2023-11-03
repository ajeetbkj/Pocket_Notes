
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NoteApp from "./components/Home/NoteApp";
import SideBar from "./components/Home/SideBar";
import { useEffect, useState } from "react";

function App() {
  const [groups, setGroups] = useState([]);
  const [data, setData] = useState([]);

  const addGroup = (newGroup) => {
    console.log("new", newGroup);
    newGroup.shortName = newGroup.name.substring(0, 2);
    setGroups([...groups, newGroup]);

    const savedGroups = JSON.parse(localStorage.getItem("groups"));
    if (savedGroups !== null) {
      localStorage.setItem(
        "groups",
        JSON.stringify([...savedGroups, newGroup])
      );
    } else {
      localStorage.setItem("groups", JSON.stringify([newGroup]));
    }
  };

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem("groups"));
    console.log(savedGroups);
    if (savedGroups !== null || savedGroups !== undefined) {
      setData(savedGroups);
    } else {
      return;
    }
  }, [groups]);

  return (
    <div className="container">
      <SideBar data={data} addGroup={addGroup} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:note" element={<NoteApp />} />
      </Routes>
    </div>
  );
}

export default App;
