import './App.css';

function Timer() {
    return (
        <div id="main">
            <section id="section09">
                <div class="inner padding">
                    <div class="title">
                        <div>
                            <h3>사전예약</h3>
                            <p id="changeTxt">입주전시회까지 남은 시간</p>
                        </div>
                    </div>

                    <div id="removeTime" class="content">
                        <div class="timer">
                            <div class="dday">
                                <p id="days"></p>
                                <p><span id="countdown"></span></p>
                            </div>
                            <div class="circle">
                                <div class="subcircle"></div>
                            </div>
                            <div class="submitbtn">
                                <a href="sub/booking.html">참가신청</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  );
}

export default Timer;
