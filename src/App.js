import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
    </div>
  );
}

function Header() {
  return(
    <header className="flex-container Header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Header-links">
          <div className="App-link">
            <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
          <div className="App-link">
            <a
            className="App-link"
            href="#inicio">
              Início
            </a>
            </div>
          <div className="App-link">
            <a 
            className="App-link"
            href="#quem-somos">
              Quem Somos
            </a>
            </div>
          <div className="App-link">
            <a 
            className="App-link"
            href="#nossa-equipe">
              Nossa Equipe
            </a>
            </div>
          <div className="App-link">
            <a 
            className="App-link"
            href="#servicos">
              Serviços
            </a>
            </div>
          <div className="App-link">
            <a 
            className="App-link"
            href="#iniciativas">
              Iniciativas
            </a>
            </div>
          <div className="App-link">
            <a 
            className="App-link"
            href="#parceiros">
              Parceiros
            </a>
          </div>
        </div>
      </header>
  );
}
function Banner() {
  return(
    <>
      <div className="Banner">
        <div className="flex-container Banner-container">
          <div className="img-banner-aeon"></div>
          <div className="espaco-meio" />
          <div className="img-banner-aeon"></div>
        </div>
      </div>
    </>
  );
}
export default App;