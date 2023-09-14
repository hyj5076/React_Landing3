import './App.css'

function Header() {
  return (
    <div>
      <header class="active-scroll active-click active-white">
          <div class="logo">
              <div class="inner">
                  <p><a href="#">EDEN<br/>C&S</a></p>

                  <div class="nav_btn"><i class="bi bi-list"></i></div>
              </div>
          </div>

          <nav>
              <div class="menu">
                  <ul>
                      <li><a href="#section02" class="inner">참여품목</a></li>
                      <li><a href="#section04" class="inner">입주민혜택</a></li>
                      <li><a href="#section06" class="inner">전시회안내</a></li>
                      <li><a href="#section08" class="inner">결제방법</a></li>
                      <li><a href="#section09" class="inner">사전예약</a></li>
                      <li><a href="#section" class="inner">고객센터</a></li>
                  </ul>
              </div>
          </nav>
      </header>
    </div>
  );
}

export default Header;