import Header from "./../components/header/index";
import Footer from "./../components/footer/index";
import Form from "./../components/form/index";

function Darksteel() {
  return (
    <div className="h-screen bg-blue-900">
      <Header></Header>
      <div>
      <p className="text-center">Aço Negro</p>
      </div>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default Darksteel;
