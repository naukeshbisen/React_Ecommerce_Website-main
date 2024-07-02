import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/Product';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Header/>
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="about" element={<About/>} />
              <Route path="product" element={<Product/>} />
              <Route path="login" element={<Login/>} />
              <Route path="signup" element={<Signup/>} />
              
      </Routes>



      {/* <Home/> */}
      {/* <Clothe/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Footer/>
    
    </>
  );
}

export default App;
