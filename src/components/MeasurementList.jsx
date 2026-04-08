function MeasurementList({ records }) {
  return (
    <div>
      <ul className="measurements-list-container">
        {records.map((item, index) => (
          <li className="measurement-card" key={index}>
            <strong className="pressure-value">
              {item.systolic} / {item.diastolic}
            </strong>{" "}
            Pulsas: <strong className="pulse-value">{item.pulse}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeasurementList;
