import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import Dinning from './Containers/Dinning/Dinning';
import { Route, Routes } from 'react-router-dom';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dinning' element={<Dinning />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
