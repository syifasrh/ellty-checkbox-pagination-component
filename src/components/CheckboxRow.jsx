function CheckboxRow({ id, label, checked, onChange }) {
  return (
    <div className="checkbox-row">
      <label className="checkbox-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="checkbox"
        id={id}
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckboxRow;
