import logo from "./logo.svg";
import "./App.css";

const green1 = "#24ff00";
const black = "#000";

function App() {
  return (
    <div className="App" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/fundo.svg)"}}>
      <Header />
      <Banner />
      <QuemSomos />
      <Equipe />
    </div>
  );
}

function Header() {
  return (
    <header className="flex-container Header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="Header-links">
        {/* <div className="App-link">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div> */}
        <div className="App-link">
          <a className="App-link" href="#inicio">
            Início
          </a>
        </div>
        <div className="App-link">
          <a className="App-link" href="#quem-somos">
            Quem Somos
          </a>
        </div>
        <div className="App-link">
          <a className="App-link" href="#nossa-equipe">
            Nossa Equipe
          </a>
        </div>
        <div className="App-link">
          <a className="App-link" href="#servicos">
            Serviços
          </a>
        </div>
        <div className="App-link">
          <a className="App-link" href="#iniciativas">
            Iniciativas
          </a>
        </div>
        <div className="App-link">
          <a className="App-link" href="#parceiros">
            Parceiros
          </a>
        </div>
      </div>
    </header>
  );
}
function Banner() {
  return (
    <>
      <div className="Banner">
        <div className="flex-container Banner-container">
          <img
            src={process.env.PUBLIC_URL + "/img/banner01.svg"}
            style={{
              margin: "2vw",
            }}
            alt="Banner AEON"
          />
          <div>
            <div
            style={{
              backgroundColor: "#fff",
              padding: "4vw 3vw",
              width: "70% !important",
              borderRadius: "2vw",
              margin: "2vw"
            }}
            >
              <img
                // src={process.env.PUBLIC_URL + "/img/banner04.png"}
                className="hover-yello"
                src={process.env.PUBLIC_URL + "/img/image5.svg"}
                style={{
                  height: "5vw",
                  width: "5vw",
                  filter: "invert(54%) sepia(94%) saturate(639%) hue-rotate(66deg) brightness(108%) contrast(127%)"
                }}
                
                alt="Banner branco AEON"
              />
            </div>
            
            <div id="banner-icons" className="flex-container">
              <a href="/"><i class="bi bi-behance"></i></a>
              <a href="https://www.instagram.com/albertoferreiraalfredo/"><i class="bi bi-instagram"></i></a>
              <a href="https://wa.me/5567996432056?text=Vim%20pelo%20link%20da%20AEON%20"><i class="bi bi-whatsapp"></i></a>
              <a href="github.com/albertoalfredo"><i class="bi bi-github"></i></a>
              <a href="mailto:albertoalfredo.profissional@gmail.com"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
        </div>
        <h2 style={{ color: "rgb(213 172 0)" }}>
          >_ Projetos Diversos para pessoas diversas{" "}
        </h2>
      </div>
    </>
  );
}
function QuemSomos() {
  return (
    <>
      <div className="flex-container centralize">
        <div
          style={{
            width: "40vw",
            margin: "10vw",
            color: green1,
            backgroundColor: black,
            padding: "3vw",
            borderRadius: "2vw",
            boxShadow: "1vw 1vw 1vw " + green1,
          }}
        >
          <h2> >_ Mas afinal, Quem somos? </h2>
          <p>
            Somos uma empresa que nasce com a proposta de escutar as pessoas, de
            entender e resolver seus problemas.
          </p>

          <p>
            Oferecemos serviços completos que vão desde desenvolvimento em
            programação dinâmica até design das mais diversas áreas possíveis.
            Para saber mais sobre os nossos serviços clique aqui.
          </p>

          <p>
            Criamos e damos manutenção em seus sites, criamos e atualizamos sua
            logo, sua marca, seu design, trabalhamos suas redes sociais, criamos
            artes para canais, dentre vários outros serviços.
          </p>

          <p>
            Buscamos entender seu produto e marca para encontrarmos as melhores
            soluções, sempre tomando a sua vontade como parâmetro.
          </p>
        </div>
      </div>
    </>
  );
}
function Equipe() {
  return (
    <>
      <div className="gradient" style={{fontSize: "1.5vw", padding: "2vw"}}>
        <h2> >_ NOSSA EQUIPE :D </h2>
        <div className="flex-container centralize">
          <div className="card">
            <h3>Alex</h3>
            <img src={process.env.PUBLIC_URL + "/img/alex.jpg"} alt="Alex" />
            <div className="flex-container centralize">
              <a href="https://wa.me/5567996432056?text=Vim%20pelo%20link%20da%20AEON%20"><i class="bi bi-whatsapp"></i></a>
              <a href="https://www.instagram.com/alexjrgimenes/"><i class="bi bi-instagram"></i></a>
            </div>
            <h3>CEO</h3>
          </div>
          <div className="card">
            <h3>Alberto</h3>
            <img
              src={process.env.PUBLIC_URL + "/img/alberto.jpeg"}
              alt="Alberto"
            />
            <div className="flex-container centralize">
              <a href="https://wa.me/5518996145924?text=Vim%20pelo%20link%20da%20AEON%20"><i class="bi bi-whatsapp"></i></a>
              <a href="github.com/albertoalfredo"><i class="bi bi-github"></i></a>
              <a href="https://www.instagram.com/albertoferreiraalfredo/"><i class="bi bi-instagram"></i></a>
            </div>
            <h3>Programador</h3>
          </div>
          <div className="card">
            <h3>Henzel</h3>
            <img
              src={process.env.PUBLIC_URL + "/img/henzel.jpeg"}
              alt="Henzel"
            />
            <div className="flex-container centralize">
              <a href="https://wa.me/5515997659846?text=Vim%20pelo%20link%20da%20AEON%20"><i class="bi bi-whatsapp"></i></a>
              <i class="bi bi-behance"></i>
              <a href="https://www.instagram.com/henzelsalomao/"><i class="bi bi-instagram"></i></a>
            </div>
            <h3>Designer</h3>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
