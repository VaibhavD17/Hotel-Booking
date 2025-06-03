import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import Dinning from './Containers/Dinning/Dinning';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Dinning />
      <Footer />
    </>
  );
}

export default App;
