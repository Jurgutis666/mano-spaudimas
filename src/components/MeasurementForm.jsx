import { useState } from "react";

function MeasurementForm({ onAdd }) {
  // cia bus useState atmintis
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pulse, setPulse] = useState("");

  // 2. Čia bus "handleSubmit" (veiksmas paspaudus mygtuką)

  function handleSubmit(e) {
    e.preventDefault();
    const newRecord = {
      systolic,
      diastolic,
      pulse,
    };
    console.log(newRecord);
    onAdd(newRecord);

    setSystolic("");
    setDiastolic("");
    setPulse("");
  }

  return (
    // 3. Čia bus tavo HTML (forma, laukeliai, mygtukas)
    <form onSubmit={handleSubmit}>
      <h2>Naujas Matavimas</h2>

      <input
        type="number"
        placeholder="Sistolinis"
        value={systolic}
        onChange={(e) => setSystolic(e.target.value)}
      />

      <input
        type="number"
        placeholder="Diastolinis"
        value={diastolic}
        onChange={(e) => setDiastolic(e.target.value)}
      />

      <input
        type="number"
        placeholder="Pulsas"
        value={pulse}
        onChange={(e) => setPulse(e.target.value)}
      />
      <button type="submit">Išsaugoti</button>
    </form>
  );
}

export default MeasurementForm;
