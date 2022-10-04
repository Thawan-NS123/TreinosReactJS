
import './App.css';

import { Link } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/Treino1'>Estudo ReactJS | Eventos</Link>
        <Link to='/Treino2'>Estudo ReactJS | Componentes</Link>
        <Link to='/Treino3'>Estudo ReactJS | Props</Link>
        <Link to='/Treino4'>Estudo ReactJS | Componentes II</Link>
      </header>
    </div>
  );
}

export default App;
