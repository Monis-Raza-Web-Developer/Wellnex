import React, { useEffect, useState } from 'react'


import "remixicon/fonts/remixicon.css";

import { BrowserRouter ,Route,Routes, useLocation } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import OurApps from './pages/OurApps';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyIcon from './components/StickyIcon';
import Pill from './components/Pill';
import Loader from './components/Loader';


const PageLoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // show loader for 2s
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};


const App = () => {
  
  return (
    <div>
       <ParallaxProvider>
      <BrowserRouter>
      <Navbar/>
      <StickyIcon/>
     <PageLoaderWrapper/>
      <Pill/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/apps' element={<OurApps/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
</ParallaxProvider>
      
    </div>
  )
}

export default App
