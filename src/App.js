import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import CountryViewList from './Pages/CountryViewList';
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
  <Router>
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark' >
    <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item active">
      <Link className="nav-link" to="/countryviewlist">CountryViewList</Link></li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link></li>
      <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>  
       </nav>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path="/countryviewList" element={<CountryViewList/>}/>
    </Routes>
    </Router>
    
    
  );
  
}

export default App;
