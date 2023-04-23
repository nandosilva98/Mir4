function Sobre(){
  alert("Projeto Criado Com Objetivo de Facilitar a Evolução no Mir4\n\nFeito por Fernando#1585\nVersão 1.1 \n08/2022");
}

function Header() {
  return (

    <div>
      <div className="bg-gray-700">
        <div className="inline-block h-14 px-8 py-4">
          <ul className="flex justify-center space-x-4">
          {/* <img src="https://mir4-nandonweb.vercel.app/images/favicon/favicon.ico" className="w-12 h-12" alt="logo" /> */}
            <li className="text-gray-900 font-medium hover:text-gray-500">
              <a href="/">Inicio</a>
            </li>
            <li className="text-gray-900 font-medium hover:text-gray-500">
              <a href="/darksteel">Aço Negro</a>
            </li>
            <li className="text-gray-900 font-medium hover:text-gray-500">
              <a href="/energia">Energia</a>
            </li>
            <li className="text-gray-900 font-medium hover:text-gray-500">
              <a href="/experiencia">Experiencia</a>
            </li>
            <li className="text-gray-900 font-medium hover:text-gray-500">
              <a href="/apoie">Apoie</a>
            </li>
            <li className="text-gray-900 font-medium hover:text-gray-500">
              <a href="#" onClick={Sobre}>Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
