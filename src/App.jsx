import MeasurementForm from "./components/MeasurementForm";
import "./index.css";
import { useState, useEffect } from "react";
import MeasurementList from "./components/MeasurementList";

function App() {
  const [records, setRecords] = useState(() => {
    const savedData = localStorage.getItem("my-data");
    return savedData ? JSON.parse(savedData) : [];
  });

  function addRecord(record) {
    setRecords([...records, record]);
  }

  useEffect(() => {
    const stringifiedData = JSON.stringify(records);
    localStorage.setItem("my-data", stringifiedData);
  }, [records]);

  return (
    <div className="app-container">
      <h1>Kraujospūdžio Seklys</h1>
      <p>Sveiki atvykę į savo sveikatos valdymo sistemą.</p>
      <MeasurementForm onAdd={addRecord} />
      <MeasurementList records={records} />
      {/* Čia vėliau atsiras mūsų komponentai */}
    </div>
  );
}

export default App;
