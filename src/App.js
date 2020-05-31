import React, { useState } from 'react';
import './App.css';

let min = 1;
let max = 100;

function numerosAleatorios(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const App = () => {
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);

  const [random, setRandom] = useState(numerosAleatorios(min, max));

  // Metodos

  function validateNumber(answer) {
    if (answer === '=') {
      setFinish(true);
      return;
    }

    // console.log('answwer', answer, min, max, random);
    if (answer !== '<' && answer !== '>' && answer !== '=') {
      console.error('RESPUESTA ERRONEA, VUELVE A INTENTARLO');
    } else {
      if (answer === '<') {
        max = random - 1;
        setRandom(numerosAleatorios(min, max));
      } else if (answer === '>') {
        min = random + 1;
        setRandom(numerosAleatorios(min, max));
      }
    }
  }

  function startGame() {
    setStart(true);
  }

  function endGame() {
    setStart(false);
    min = 1;
    max = 100;
    setRandom(numerosAleatorios(min, max));
    setFinish(false);
  }

  return (
    <div className="container App">
      <br />
      <h1 className="font-weight-bold">¡SE CÚAL ES TU NÚMERO!</h1>
      <br />
      <br />
      <h2 className="font-weight-bold">Instrucciones</h2>
      <div className="row justify-content-md-center">
        <div className="col-sm-12 col-md-6">
          <p>Piensa un número del 1 al 100.</p>
          <p>
            Cuando aparezca un número en pantalla selecciona <strong>'&#60;'</strong> si es menor a tu número, <strong>'&#62;'</strong> si
            es mayor a tu número o <strong>'&#61;'</strong> igual al número que pensastes.
          </p>
        </div>
      </div>
      <br />
      <br />
      <h2>¿Piensa en un número?</h2>
      <br />
      <br />
      {start ? (
        <>
          <div className="row justify-content-md-center">
            <div className="col-sm-8 col-md-2">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title font-weight-bold">{random}</h1>
                </div>
              </div>
              {finish && <p>Tu número es: {random}</p>}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="buttons-row">
                <button className="btn btn-secondary btn-lg" onClick={() => validateNumber('<')}>
                  &#60;
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => validateNumber('>')}>
                  &#62;
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => validateNumber('=')}>
                  &#61;
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          {finish && (
            <div className="row">
              <div className="col-12">
                <button type="button" class="btn btn-primary btn-lg" onClick={endGame}>
                  Reiniciar
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="row">
          <div className="col-12">
            <button type="button" class="btn btn-primary btn-lg" onClick={startGame}>
              Empezar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
