import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigationBar';
import Footer from './components/footer';

import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Home from './components/home';

function App() {

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home to="/" />}></Route>
        <Route path='/portfolio' element={<Portfolio to="/portfolio" />}></Route>
        <Route path='/contact' element={<Contact to="/contact" />}></Route>
      </Routes>

      <Footer />
    </div>
  );
  
}

export default App;