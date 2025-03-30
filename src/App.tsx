import "./styles/base.css";
import "./styles/animation.css";
import { Home } from 'Home';
import {  HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Portfolio } from "Portfolio";
import { Header } from "Header";
import { Footer } from "Footer";
import { About } from "About";
import { useEffect } from "react";
import Study from "Study";
import AOS from 'aos';
import "aos/dist/aos.css"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[])
  return (
   <>
     {/* <BrowserRouter basename="/react_port"> */}
    <Router> 
      <Header />
      <ScrollToTop />
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/study' element={<Study />} />
      </Routes>
      <Footer />
     </Router>
   </>
  );
}

export default App;
