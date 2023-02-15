import './App.css'
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'
import { lazy , Suspense } from 'react';

import Home from './pages/Home';
const Shop = lazy(() => import('./pages/Shop'));
const Menu = lazy(() => import('./pages/Menu'));
const OurRoots = lazy(() => import('./pages/OurRoots'));
const Visit = lazy(() => import('./pages/Visit'));

function App() {

  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/OurRoots" element={<OurRoots/>} />
          <Route path="/Visit" element={<Visit/>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
