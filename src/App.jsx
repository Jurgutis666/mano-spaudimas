import MeasurementForm from "./components/MeasurementForm";
import "./index.css";
import { useState } from "react";

function App() {
  const [records, setRecords] = useState([]);

  function addRecord(record) {
    setRecords([...records, record]);
  }
  return (
    <div className="app-container">
      <h1>Kraujospūdžio Seklys</h1>
      <p>Sveiki atvykę į savo sveikatos valdymo sistemą.</p>
      <MeasurementForm onAdd={addRecord} />
      {/* Čia vėliau atsiras mūsų komponentai */}
      <ul>
        {records.map((item, index) => (
          <li key={index}>
            {item.systolic} / {item.diastolic} - Pulsas: {item.pulse}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
