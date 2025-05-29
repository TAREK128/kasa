import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
       <Footer /> 
    </>
  )
}


export default App;
