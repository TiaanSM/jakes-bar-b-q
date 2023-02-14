import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Shop from './pages/Shop';
import Menu from './pages/Menu';
import OurRoots from './pages/OurRoots';
import Visit from './pages/Visit';

function App() {


  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/OurRoots" element={<OurRoots/>} />
          <Route path="/Visit" element={<Visit/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
