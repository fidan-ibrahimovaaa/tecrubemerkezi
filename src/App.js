
import './App.css';
import './Responsive.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Prog from './components/Prog'
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Arrowup from './components/Arrowup';


import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick.jquery.json"
import Login from './components/Login';
import UserInterface from './components/UserInterface';
import ControlPanel from './components/ControlPanel';
import OperatorPanel from './components/OperatorPanel';
import Partner from './components/Partner';
import Body from './components/Body'


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/prog' element={<Prog />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/UserInterface' element={<UserInterface />} />
          <Route path='/ControlPanel' element={<ControlPanel />} />
          <Route path='/OperatorPanel' element={<OperatorPanel />} />
          <Route path='/Partner' element={<Partner />} />
          <Route path='/body' element={<Body/>} />
          
        </Routes>
        <Footer />
        <Arrowup />
      </BrowserRouter>

    </div>
  );
}

export default App;