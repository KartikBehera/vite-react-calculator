import { useState } from 'react';
import style from './app.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';

function App() {
  const [getStateValues, setStateValue] = useState('');

  const onButtonClick = (selectedText) => {
    if (selectedText === 'C') {
      setStateValue('');
    } else if (selectedText === '=') {
      const result = eval(getStateValues);
      setStateValue(result);
    } else {
      const nowDisplayValue = getStateValues + selectedText;
      setStateValue(nowDisplayValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display displayValue={getStateValues} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
