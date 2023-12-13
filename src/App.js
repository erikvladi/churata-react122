import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbarr from './componentes/Navbarr';
import Carrusell from './componentes/Carrusell';
import Cardss from './componentes/Cardss';
import Creditoo from './componentes/Creditoo';
import Formularioo from './componentes/Formularioo';
import Foterr from './componentes/foterr/Foterr';
import Botoness from './componentes/Botoness';
import Contact from './componentes/Contact';


function App() {
  return (
    <div className="App">
      <header>
        <Navbarr/>
        <Carrusell/>
      </header>
      <main>
        <section><Cardss/></section>
        <section><Creditoo/></section>
        <section><Formularioo/></section>        
        <section><Contact/></section>
        <section><Botoness/></section>
                
      </main>
      <footer>
        <Foterr/>
      </footer>
        
    </div>
  );
}

export default App;
