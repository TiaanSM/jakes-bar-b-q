import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Menu from './pages/Menu';
import OurRoots from './pages/OurRoots';
import Visit from './pages/Visit';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
