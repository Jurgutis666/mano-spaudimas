function MeasurementList({ records }) {
  return (
    <ul>
      {records.map((item, index) => (
        <li key={index}>
          {item.systolic} / {item.diastolic} - Pulsas: {item.pulse}
        </li>
      ))}
    </ul>
  );
}

export default MeasurementList;
