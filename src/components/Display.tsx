import style from '../app.module.css';

function Display({ displayValue }) {
  return (
    <input
      className={style.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
}

export default Display;
