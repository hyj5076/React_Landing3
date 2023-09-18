import { useEffect, useState } from 'react';
import './App.css';

function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const navBtn = document.querySelector('.nav_btn');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    const handleScroll = () => {
      if (!navVisible) {
        let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 150) {
          setScrollActive(true);
        } else {
          setScrollActive(false);
        }
      }
    };
    
    const toggleNav = (e) => {
      e.preventDefault();
      if (!navVisible) {
        nav.style.display = 'block';
        nav.style.height = `${nav.scrollHeight}px`;
        header.classList.add('active-click', 'active-white');
      } else {
        nav.style.height = '0';
        nav.style.display = 'none';
        header.classList.remove('active-click', 'active-white');
      }
      setNavVisible(!navVisible);
    };

    navBtn.addEventListener('click', toggleNav);
    window.addEventListener('scroll', handleScroll);

    return () => {
      navBtn.removeEventListener('click', toggleNav);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navVisible, scrollActive]);

  return (
    <div>
      <header className={`${scrollActive ? 'active-scroll' : ''}`}>
        <div className="logo">
          <div className="inner">
            <p><a href="#">EDEN<br/>C&S</a></p>
            <div className="nav_btn"><i className={`bi ${navVisible ? 'bi-x' : 'bi-list'}`}></i></div>
          </div>
        </div>

        <nav>
          <div className="menu">
            <ul>
              <li><a href="#section02" className="inner">참여품목</a></li>
              <li><a href="#section04" className="inner">입주민혜택</a></li>
              <li><a href="#section06" className="inner">전시회안내</a></li>
              <li><a href="#section08" className="inner">결제방법</a></li>
              <li><a href="#section09" className="inner">사전예약</a></li>
              <li><a href="#section" className="inner">고객센터</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
