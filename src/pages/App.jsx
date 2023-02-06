import { useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import "./App.css";

function App() {
  return (
    <AnimatedBackground>
      <div className='inputDiv'>
        <label className='inputLabel'>Digite um texto</label>
        <input
          type='text'
          className='inputBox'
          onChange={(event) => setUser1Text(event.target.value)}
        />
        {/* <button>Poste o texto</button> */}
      </div>
      <div className='textsDiv'>
        <div className='userDiv'>
          <h1>Usuário 1</h1>
          <h2 className='userText'>Teste</h2>
        </div>
        <div className='userDiv'>
          <h1>Usuário 2</h1>
          <h2 className='userText'>Aa</h2>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default App;
