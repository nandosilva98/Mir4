import Header from "./../components/header/";
import Footer from "./../components/footer/";
import { Form } from "./../components/form/index";

function Energia() {
  return (
    <div>
      <div className='h-screen bg-[url("https://raw.githubusercontent.com/nandonweb/Mir4/main/images/calculadora/fundo_energia_2.png")] bg-no-repeat bg-cover '>
        <Header></Header>
        <Form
          title="Calculadora de Energia"
          seconds="Em Quantos Segundos Você Recolhe?"
          average="Media de Energia Recolhida por Vez?"
          time_remaining="Tempo Restante em Minuto?"
        />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Energia;
