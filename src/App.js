import "./App.css";
import rocket from "./assets/rocket.svg";
import Countdown from "react-countdown";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="cronometro">
            <h1>READY TO LAUNCH IN...</h1>
            
            <div className="contagem-regressiva">

            <div className="horas">
              <p>Dias</p>
              <p>Horas</p>
              <p>Minutos</p>
              <p>Segundos</p>
            </div>

              <Countdown
                className="countdown"
                date={Date.now() + 700000000 }
                zeroPadTime={Boolean.TRUE}
                autoStart={true}
              />
            </div>

            <div className='button-div'>
              <p>Inscreva-se para saber mais sobre o lançamento</p>
              <button>Inscreva-se</button>
            </div>

          </div>

          <div className="imagem">
            <img src={rocket} alt="rocket" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
