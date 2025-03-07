import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

const App = () => {

  const [input, setInput] = useState(''); // Utilisation du state pour l'écran

  const handleClick = (value) => {
    setInput(input + value); // Ajouter le chiffre ou l'opération au texte affiché
  };

  const handleClear = () => {
    setInput(''); // Vider le state = réinitialiser l'écran
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        {buttons.flat().map((button, index) => (
          <Button key={index} value={button} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;