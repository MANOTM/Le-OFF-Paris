import { Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import { AnimatePresence } from 'framer-motion';
import NotFound from './pages/not-found/NotFound';
import Home from './pages/home/Home';
import About from './pages/about/About'; 
import Resto from './pages/resto/Resto';
import Cart from './pages/cart/Cart';

function App() {
  const { pathname } = useLocation();
  const loacation = useLocation() 

  useEffect(() => {
    const lenis = new Lenis()
    function ref(time) {
      lenis.raf(time)
      requestAnimationFrame(ref)
    }
    requestAnimationFrame(ref)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200) 
  }, [pathname]);
 

  return ( 
      <AnimatePresence> 
        <Routes location={loacation} key={loacation.pathname} >
          <Route path='/' element={<Home />} />
          <Route path='/a-propos' element={<About />} />
          <Route path='/restos' element={<Resto />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </AnimatePresence> 
  )
}
export default App
