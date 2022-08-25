import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import ClearButton from './components/clear-button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className="App">
      <div className='main-container'>
        <Screen input={input}/>
           <div className='row'>
            <Button manejarClic={addInput}>1</Button>
            <Button manejarClic={addInput}>2</Button>
            <Button manejarClic={addInput}>3</Button>
            <Button manejarClic={addInput}>+</Button>
           </div>
           <div className='row'>
            <Button manejarClic={addInput}>4</Button>
            <Button manejarClic={addInput}>5</Button>
            <Button manejarClic={addInput}>6</Button>
            <Button manejarClic={addInput}>-</Button>
           </div>
           <div className='row'>
            <Button manejarClic={addInput}>7</Button>
            <Button manejarClic={addInput}>8</Button>
            <Button manejarClic={addInput}>9</Button>
            <Button manejarClic={addInput}>X</Button>
           </div>
           <div className='row'>
            <Button manejarClic={calculateResult}>=</Button>
            <Button manejarClic={addInput}>0</Button>
            <Button manejarClic={addInput}>.</Button>
            <Button manejarClic={addInput }>/</Button>
           </div>
           <div className='row'>
           <ClearButton manejarClear={() => setInput('')}>Clear
           </ClearButton>
           </div>
      </div>
    </div>
  );
}

export default App;
