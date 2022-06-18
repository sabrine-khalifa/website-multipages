import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Subscribe from './pages/subscribe';
import Contact from './pages/contact';
import Pied from './footer/pied';

function App() {
  return (

    <Router>
    <Navbar /> 
    <Routes>
       <Route path='/home' element={<Home/>} />

        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/subscribe' element={<Subscribe/>} />
        <Route path='/pied' element={<Pied/>} />

    </Routes>
    </Router>
);
}
  
export default App;

