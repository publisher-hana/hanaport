import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Cover, HeaderGnb, HeaderMenu, HeaderStyle, MenuClose, MobileMenu } from "styles/common.style"
import logoImg from '../images/logo_myport.png';

export const Header = () => {
    useEffect(() => {
        window.addEventListener('scroll', updateClass);
        updateClass();
    }, []); 
    const updateClass = () => {
        const header = document.querySelector('header'); // HeaderStyle에 .header 클래스 추가하여 CSS 선택
        if (header) { 
            if (window.scrollY >1) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        }
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
      setMenuOpen(!menuOpen);
    }
    const closeMenu = () => {
      setMenuOpen(false); // 메뉴 닫기
    };
    return (
      <>
        <Cover className={menuOpen ? "on" : ""}></Cover>
        <HeaderStyle>
            <div className="inner">
              <h1 className="logo"><Link to="/"><img src={logoImg} alt="my portfolio 로고" /></Link></h1>
              <nav>
                  <HeaderMenu>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/portfolio">Portfolio</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/study">My Study</Link></li>
                  </HeaderMenu>
              </nav>
              <HeaderGnb onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="hidden">메뉴</span>
              </HeaderGnb>
          </div>
        </HeaderStyle>
        <MobileMenu className={menuOpen ? "on" : ""}>
              <MenuClose onClick={closeMenu}>
                <span className="hidden">닫기</span>
              </MenuClose>
              <nav>
                <HeaderMenu>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/study" onClick={closeMenu}>My Study</Link></li>
                </HeaderMenu>
              </nav>
          </MobileMenu>
      </>
    )
}