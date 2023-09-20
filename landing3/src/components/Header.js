import { useEffect, useState } from 'react';

function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  // 스크롤 이벤트 header 투명도 변경
  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navVisible]);

  // 메뉴 슬라이드 띄우기
  useEffect(() => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    nav.style.overflow = 'hidden';
    nav.style.transition = 'all 0.4s ease';
    
    if (navVisible) {
      nav.style.display = 'block';
      nav.style.height = `${nav.scrollHeight}px`;
      header.classList.add('active-click', 'active-white');
    } else {
      nav.style.height = '0';
      nav.style.display = 'none';
      header.classList.remove('active-click', 'active-white');
    }
  }, [navVisible]);
  
  // 메뉴 토글 이벤트
  const toggleNav = (e) => {
    e.preventDefault();
    setNavVisible(!navVisible);
  };
  
  // 메뉴 타겟 스크롤 이동 후 nav 접기
  const handleMenuClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setNavVisible(false);
  };
  
  return (
    <div>
      <header className={`${scrollActive ? 'active-scroll' : ''}`}>
        <div className="logo">
          <div className="inner">
            <p><a href="#">EDEN<br />C&S</a></p>
            <div className="nav_btn" onClick={toggleNav}>
              <i className={`bi ${navVisible ? 'bi-x' : 'bi-list'}`}></i>
            </div>
          </div>
        </div>

        <nav>
          <div className="menu">
            <ul>
              <li><a href="#section02" className="inner" onClick={(e) => handleMenuClick(e, '#section02')}>참여품목</a></li>
              <li><a href="#section04" className="inner" onClick={(e) => handleMenuClick(e, '#section04')}>입주민혜택</a></li>
              <li><a href="#section06" className="inner" onClick={(e) => handleMenuClick(e, '#section06')}>전시회안내</a></li>
              <li><a href="#section08" className="inner" onClick={(e) => handleMenuClick(e, '#section08')}>결제방법</a></li>
              <li><a href="#section09" className="inner" onClick={(e) => handleMenuClick(e, '#section09')}>사전예약</a></li>
              <li><a href="#section" className="inner" onClick={(e) => handleMenuClick(e, '#section')}>고객센터</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
