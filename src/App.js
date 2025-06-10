import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Gallery from './Containers/Gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddReview from './Containers/AddReview/AddReview';
import Profile from './Containers/Profile/Profile';
import BookingDetails from './Containers/BookingDetails/BookingDetails';
import CancelPolicy from './Containers/Policy/CancelPolicy';
import TermsConditions from './Containers/Policy/TermsConditions';
import PrivacyPolicy from './Containers/Policy/PrivacyPolicy';
import Rooms from './Containers/Rooms/Rooms';
import Dinnings from './Containers/Dinnings/Dinnings';
import Home from './Containers/Home/Home';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='rooms' element={<Rooms />} />
        <Route path='dinning' element={<Dinnings />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='addreview' element={<AddReview />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
      
      {/* <AddReview /> */}
      {/* <Profile /> */}
      {/* <BookingDetails /> */}
      {/* <CancelPolicy /> */}
      {/* <TermsConditions /> */}
      {/* <PrivacyPolicy /> */}
      
      <Footer />
    </div>
  );
}

export default App;
