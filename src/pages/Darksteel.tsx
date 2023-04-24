import Header from "./../components/header/index";
import Footer from "./../components/footer/index";
import Form from "./../components/form/index";

function Darksteel() {
  return (
    <div>
     <div className='h-screen bg-[url("https://raw.githubusercontent.com/nandonweb/Mir4/main/images/calculadora/fundo_ds2.png")] bg-no-repeat bg-cover '>
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
     </div>
    </div>
  );
}

export default Darksteel;
