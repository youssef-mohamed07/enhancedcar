import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import AboutUs from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CarList/>
      <CarDetail />
      <AboutUs />
      <ContactUs />
      <Footer/>
    </>
  );
}


export default App;
