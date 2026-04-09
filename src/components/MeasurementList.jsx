function MeasurementList({ records }) {
  return (
    <div>
      <ul className="measurements-list-container">
        {[...records].reverse().map((item, index) => (
          <li className="measurement-card" key={index}>
            <p className="measurement-time">{item.date}</p>
            <div className="pressure-section">
              <span className="pressure-label">Spaudimas: </span>
              <div className="value-group">
                <strong className="pressure-value">
                  {item.systolic} / {item.diastolic}
                </strong>
                <span className="unit-label"> mmHg</span>
              </div>
            </div>
            <div className="pulse-section">
              <span className="pulse-label">Pulsas: </span>
              <div className="value-group">
                <strong className="pulse-value">{item.pulse}</strong>
                <span className="unit-label"> BPM</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeasurementList;
