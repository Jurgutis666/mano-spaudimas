import { useState } from "react";

function MeasurementForm({ onAdd }) {
  // cia bus useState atmintis
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pulse, setPulse] = useState("");
  const [isNow, setIsNow] = useState(true);
  const [manualDate, setManualDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const rawDate = isNow ? new Date() : new Date(manualDate);

    const finalDate = rawDate.toLocaleString("lt-LT", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const newRecord = {
      systolic: Number(systolic),
      diastolic: Number(diastolic),
      pulse: Number(pulse),
      date: finalDate,
    };

    onAdd(newRecord);

    setSystolic("");
    setDiastolic("");
    setPulse("");
    setManualDate("");
  }

  return (
    <form className="measurement-form" onSubmit={handleSubmit}>
      <h2>Naujas Matavimas</h2>

      <div className="date-selection-container">
        <label>
          <input
            type="checkbox"
            checked={isNow}
            onChange={(e) => setIsNow(e.target.checked)}
          />{" "}
          Matuoju dabar
        </label>
        {!isNow && (
          <input
            type="datetime-local"
            className="form-input"
            value={manualDate}
            onChange={(e) => setManualDate(e.target.value)}
          />
        )}
      </div>

      <input
        className="form-input"
        type="number"
        min={40}
        max={300}
        placeholder="Sistolinis"
        value={systolic}
        onChange={(e) => setSystolic(e.target.value)}
      />

      <input
        className="form-input"
        type="number"
        min={20}
        max={200}
        placeholder="Diastolinis"
        value={diastolic}
        onChange={(e) => setDiastolic(e.target.value)}
      />

      <input
        className="form-input"
        type="number"
        min={20}
        max={250}
        placeholder="Pulsas"
        value={pulse}
        onChange={(e) => setPulse(e.target.value)}
      />
      <button className="submit-button" type="submit">
        Išsaugoti
      </button>
    </form>
  );
}

export default MeasurementForm;
