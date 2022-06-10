import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom"

// Components
import NavBar from './components/navbar/NavBar';

// Pages
import DigitalArtPage from './pages/digital-art/DigitalArtPage';
import PaperInkPage from './pages/paper-ink/PaperInkPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/digital-art" element={ <DigitalArtPage /> } />
          <Route path="/paper-and-ink" element={ <PaperInkPage /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
