function MeasurementList({ records }) {
  return (
    <div>
      <ul className="measurements-list-container">
        {[...records].reverse().map((item, index) => (
          <li className="measurement-card" key={index}>
            <div className="measurement-date-time">
              <span className="date-part">
                {item.date
                  ? item.date.replace("T", " ").split(" ")[0]
                  : "Data nenurodyta"}
              </span>{" "}
              <span className="time-part">
                {item.date ? item.date.replace("T", " ").split(" ")[1] : ""}
              </span>
            </div>

            <div className="measurement-data">
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeasurementList;
