import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Darksteel from './pages/Darksteel';
import Energia from './pages/Energia';
import Exp from './pages/Experiencia';
import Apoie from './pages/Apoie';

 
function App() {

  return (
   <div>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/darksteel" element={ <Darksteel /> }></Route>
        <Route path="/energia" element={ <Energia /> }></Route>
        <Route path="/experiencia" element={ <Exp /> }></Route>
        <Route path="/apoie" element={ <Apoie /> }></Route>
      </Routes>
    </BrowserRouter>
    
   </div>
  );
}
 
export default App;