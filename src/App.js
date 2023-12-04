// App.js
import React, { useState } from 'react';
import InputField from './InputField';
import CalcButton from './CalcButton';
import './index.css'
const App = () => {
  const [alcoolPrice, setAlcoolPrice] = useState('');
  const [gasolinaPrice, setGasolinaPrice] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    if (!alcoolPrice || !gasolinaPrice) {
      alert('Preencha ambos os valores!');
      return;
    }

    const alcool = parseFloat(alcoolPrice.replace(',', '.'));
    const gasolina = parseFloat(gasolinaPrice.replace(',', '.'));

    const ratio = alcool / gasolina;

    if (ratio < 0.7) {
      setResult('Abasteça com Álcool');
    } else {
      setResult('Abasteça com Gasolina');
    }
  };

  return (
    <div className='container'>
      <div className='adjust-box'>
      <img src={require('./combustivel.png')} alt='gasoline' className='st-img'/>
      <p>Você sabe com qual combustível compensa mais abastecer seu carro? <br></br> Utilize a calculadora abaixo:</p>
      <InputField label="Preço - litro etanol (R$):" value={alcoolPrice} onChange={(e) => setAlcoolPrice(e.target.value)} />
      <InputField label="Preço - litro gasolina (R$):" value={gasolinaPrice} onChange={(e) => setGasolinaPrice(e.target.value)} />
      <CalcButton onClick={handleCalculate} label="Calcular" />
      {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default App;

