import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header /> {/* هذا هو الهيدر */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
