import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [user1Text, setUser1Text] = useState(undefined);
  const [user2Text, setUser2Text] = useState(undefined);

  return (
    <div className='App'>
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
          <h2 className='userText'>{user1Text}</h2>
        </div>
        <div className='userDiv'>
          <h1>Usuário 2</h1>
          <h2 className='userText'>{user2Text}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
