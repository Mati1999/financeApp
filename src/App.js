import './App.scss';
import Navbar from './components/Navbar.js';
import BalanceContainer from './components/BalanceContainer';
import Perfil from './components/Perfil';
import HistorialContainer from './components/HistorialContainer';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<main className='AppMain'><BalanceContainer /></main>} />
          <Route path='/perfil' element={<main className='AppMain'><Perfil /></main>} />
          <Route path='/historial' element={<main className='AppMain'><HistorialContainer /></main>} />
          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
        <Navbar />
      </div >
    </BrowserRouter>
  );
}

export default App;
