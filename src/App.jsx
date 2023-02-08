import './App.css'

import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  
  //<Button text="SHOP SAUCES" />

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
