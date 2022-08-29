/*import logo from './logo.svg';*/
import './App.css';
import './index.css';
import React from 'react';
import {useNavigate} from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  return (

    <div className="bg-indigo-400">
      <h1 className = "text-3xl font-serif font-bold text-center animate-bounce">MY PENJANA PROJECT</h1>
      <button class="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  
      onClick = {() => navigate('/landing')}>Go to HomePage</button>
      <p>Faqirah 2022 e-penjana</p>
    </div>
  );
}

export default App;
