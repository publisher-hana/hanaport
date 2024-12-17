import { useEffect } from "react";
import { Link } from "react-router-dom"
import { HeaderMenu, HeaderStyle } from "styles/common.style"
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
    return (
        <HeaderStyle>
             <div className="inner">
                <h1 className="logo"><Link to="/"><img src={logoImg} alt="my portfolio 로고" /></Link></h1>
                <nav>
                    <HeaderMenu>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </HeaderMenu>
                </nav>
            </div>
        </HeaderStyle>
    )
}