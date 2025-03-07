import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import CalcButton from './components/CalcButton';

const App = () => {

  const [input, setInput] = useState(''); // Représente ce que l'utilisateur est en train d'écrire
  const [firstNumber, setFirstNumber] = useState(null); // Premier nombre
  const [operator, setOperator] = useState(null); // L'opérateur
  const [isSecondNumber, setIsSecondNumber] = useState(false); // Booleén qui permet de savoir si on attends le premier chiffre (false) ou le second (true)


  //Fonction pour gérer le clic sur un bouton
  const handleClick = (value) => {

    //Si on clique sur un opérateur
    if (['+', '-', '*', '/'].includes(value) && input !== '') {
      // Enregistrer l'opération et le premier nombre
      setFirstNumber(parseFloat(input));
      setOperator(value);
      setIsSecondNumber(true);
      setInput(''); // Effacer l'écran pour entrer le deuxième nombre
    }
    
    //Si on clique sur le bouton égal
    else if (value === '=') {
      // Effectuer l'opération
      if (firstNumber !== null && input !== '') {
        let result;
        const secondNumber = parseFloat(input);

        // Effectuer l'opération en fonction de l'opérateur sélectionnée
        switch (operator) {
          case '+':
            result = firstNumber + secondNumber;
            break;
          case '-':
            result = firstNumber - secondNumber;
            break;
          case '*':
            result = firstNumber * secondNumber;
            break;
          case '/':
            if (secondNumber === 0) {
              result = 'Erreur div zéro'; //Pas de division par zéro
            } else {
              result = firstNumber / secondNumber;
            }
            break;
          default:
            result = 'Erreur';
        }

        //On remet la calculatrice à zéro, sauf le résultat qu'on affiche

        setInput(result.toString()); // Afficher le résultat
        setFirstNumber(null); // Réinitialiser les nombres
        setOperator(null); // Réinitialiser l'opérateur
        setIsSecondNumber(false); // Réinitialiser le booleen
      }
    } 
    //Si on clique sur le bouton cancel
    else if (value === 'C') {
      // Réinitialiser la calculatrice intégralement (on remet les mêmes valeurs qu'à l'initialisation)
      setInput('');
      setFirstNumber(null);
      setOperator(null);
      setIsSecondNumber(false);
    }
    //Dans les autres cas, c'est un bouton chiffre ou virgule, qui sont traités identiquement
    else {
      //Si c'est le deuxième chiffre
      if (isSecondNumber) {
        setInput(value); // Remplacer l'entrée par le deuxième nombre
        setIsSecondNumber(false);
      }
      //Si c'est le 1er chiffre
      else {
        setInput(input + value); // Ajouter le chiffre à l'écran
      }
    }
  };

  const handleClear = () => {
    //On remet tout à zéro
    setInput('');
    setFirstNumber(null);
    setOperator(null);
    setIsSecondNumber(false);
  };

  const buttons =[
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator">
      <Display leftNumber={firstNumber} operator={operator} rightNumber={input}/>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        {buttons.map((button, index) => (
          <CalcButton key={index} value={button} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;