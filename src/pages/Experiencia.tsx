import Header from "../components/header";
import Footer from "../components/footer";
import { Exp, Farm } from "./../components/form/index";

function Experiencia() {
  return (
    <div>
      <div className='h-screen bg-[url("https://raw.githubusercontent.com/nandonweb/Mir4/main/images/calculadora/fundo_exp.png")] bg-no-repeat bg-cover '>
        <Header></Header>
        <div className="flex justify-around mx-28">
        <Exp
          title="Calculadora de XP"
          porcem="Seus 5% de XP?"
          level="Porcentagem do Level Atual"
        />
        <Farm 
          title="Calculadora de Farm"
          levelup="XP Necessario para Upar de Level?"
          mob_kill="XP por cada monstro abatido?"
          mob_time="Quantos Segundos para abater um mob?" 
          time_remaining="Tempo de Farm?"        
        />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Experiencia;
