import { useEffect, useState } from 'react';
import './App.css';

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const navBtn = document.querySelector('.nav_btn');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const icon = document.querySelector('.nav_btn i');

    const toggleNav = (e) => {
      e.preventDefault();
      if (!navVisible) {
        nav.style.display = 'block';
        nav.style.height = `${nav.scrollHeight}px`;
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
        header.classList.add('active-click', 'active-white');
      } else {
        nav.style.height = '0';
        nav.style.display = 'none';
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
        header.classList.remove('active-click', 'active-white');
      }
      setNavVisible(!navVisible);
    };

    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 150) {
        header.classList.add('active-scroll');
      } else {
        header.classList.remove('active-scroll');
      }
    };

    navBtn.addEventListener('click', toggleNav);
    window.addEventListener('scroll', handleScroll);

    return () => {
      navBtn.removeEventListener('click', toggleNav);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navVisible]);

  return (
    <div>
      <header className="active-scroll active-click active-white">
        <div className="logo">
          <div className="inner">
            <p><a href="#">EDEN<br/>C&S</a></p>
            <div className="nav_btn"><i className="bi bi-list"></i></div>
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
