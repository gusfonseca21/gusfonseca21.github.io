import AnimatedBackground from "../components/AnimatedBackground";
import "./App.css";
import reactImg from "../assets/react.svg";

function App() {
  return (
    <AnimatedBackground>
      <div className='root'>
        <div className='loginBox'>
          <div className='profilePictureBox'>
            <label className='profileLabel'>Escolha seu avatar</label>
            <img className='profilePicture' src={reactImg} />
          </div>
          <div className='nameInputBox'>
            <label className='inputLabel'>Digite seu nome</label>
            <input type='text' className='nameInput' />
          </div>
          <button className='startButton'>Iniciar</button>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default App;
