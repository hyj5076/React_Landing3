import './App.css';

function Schedule() {
  return (
    <div id="main">
        <section id="section06">
            <div class="inner padding">
                <div class="title">
                    <div>
                        <h3>전시회 일정/장소</h3>
                        <p>힐스테이트 푸르지오 수원</p>
                    </div>
                </div>

                <div class="content">
                    <div class="date date0">
                        <div style={{display: 'none'}}>
                            <input type="date" id="startDayInput" value="2023-10-21" />
                            <input type="date" id="endDayInput" value="2023-10-22" />
                        </div>
                        <div class="icon">
                            <a href="javascript:void(0);"><i id="calendarIcon" class="bi bi-calendar-fill"></i></a>
                            <div class="calendar" id="calendar"></div>
                        </div>
                        <div class="txt">
                            <h5>일정</h5>
                            <p>2023</p>
                            <p><span>10.21</span> 토 - <span>10.22</span> 일</p>
                        </div>
                    </div>

                    <div class="place">
                        <div class="icon">
                            <a href="" id="goToMap"><i class="bi bi-geo-alt-fill"></i></a>
                        </div>
                        <div class="txt">
                            <h5>장소</h5>
                            <p><span id="myAddress">경기 수원시 영통구 월드컵로 206</span><a id="saveButton"><i class="bi bi-subtract"></i></a></p>
                            <p>(아주대학교 체육관)</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
    </div>
  );
}

export default Schedule;