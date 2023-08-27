import './App.css'
import Cards from './components/Cards';
import { ContactForm } from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Servicios from './components/Servicios';
import TopNavigation from './components/TopNavigation';

function App() {
  

  return (
    <>
      <TopNavigation />
      <Navigation />
      <Hero />
      <Cards />
      <Servicios />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
