import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import Dinning from './Containers/Dinning/Dinning';
import { Route, Routes } from 'react-router-dom';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Gallery from './Containers/Gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddReview from './Containers/AddReview/AddReview';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='dinning' element={<Dinning />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} /> */}
        {/* <Route path='addreview' element={<AddReview />} /> */}
      </Routes>
      <AddReview />
      <Footer />
    </div>
  );
}

export default App;
