import './App.css'
import Dual from './components/Dual';
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
      <Servicios />
      <Dual />
      <Footer />
    </>
  )
}

export default App
