import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import Saved_Cards from './Containers/Saved-Cards/Saved_Cards';
import Change_Password from './Containers/Change-Password/Change_Password';
import Ask_questions from './Containers/Ask-questions/Ask_questions';
import Rooms from './Containers/Rooms/Rooms';
import Delete_Acc from './Containers/Delete-Account/Delete_Acc';
import Logout from './Containers/Logout/Logout';
import My_booking from './Containers/My-Bookings/My_booking';
import Dinnings from './Containers/Dinning/Dinning';

function App() {

  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <Header />
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<Home />} />
        <Route path='rooms' element={<Rooms />} />
        <Route path='dinning' element={<Dinnings />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='addreview' element={<AddReview />} />
        <Route path='profile' element={<Profile />} />
        <Route path='My_booking' element={<My_booking />} />
        <Route path="Saved-cards" element={<Saved_Cards />} />
        <Route path="change-password" element={<Change_Password />} />
        <Route path="Delete_Account" element={<Delete_Acc />} />
        <Route path="Logout" element={<Logout />} />
      </Routes>
      {/* <AddReview /> */}
      {/* <Profile /> */}
      {/* <BookingDetails /> */}
      {/* <CancelPolicy /> */}
      {/* <TermsConditions /> */}
      {/* <PrivacyPolicy /> */}
      {/* <Saved_Cards /> */}
      {/* <Ask_questions /> */}

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/change-password" element={<Change_Password />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
