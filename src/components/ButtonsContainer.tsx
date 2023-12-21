import style from '../app.module.css';
function ButtonsContainer({ onButtonClick }) {
  let buttonNames: Array<string> = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.',
  ];
  return (
    <div className={style.buttonsContainer}>
      {buttonNames.map((item) => (
        <button className={style.button} onClick={() => onButtonClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
