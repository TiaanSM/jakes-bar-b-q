import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import OurRoots from './pages/OurRoots';
import Visit from './pages/Visit';

function App() {
  
  // button display none props selection. restaurant?

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
