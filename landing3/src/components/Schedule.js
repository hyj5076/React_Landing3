import './App.css';
import ShowDdayFunction from './showDdayFunction';

function Schedule() {

    // Google 지도 링크 생성
    const goToMap = () => {
        const addressElement = document.querySelector('#myAddress');
        const addressText = addressElement.innerText;
    
        const mapLink = 'https://www.google.co.kr/maps/?hl=ko&entry=ttu&q=' + encodeURIComponent(addressText);

        window.open(mapLink, '_blank');
    };

    // 주소 복사 기능
    const copyAddress = () => {
        const addressElement = document.querySelector('#myAddress');
        // div의 내용(textContent)을 복사한다.
        window.navigator.clipboard.writeText(addressElement.textContent).then(() => {
            // 복사가 완료되면 호출된다.
            alert("복사완료");
        });
    };
    

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
                        <ShowDdayFunction />
                        <div class="txt">
                            <h5>일정</h5>
                            <p>2023</p>
                            <p><span>10.21</span> 토 - <span>10.22</span> 일</p>
                        </div>
                    </div>

                    <div class="place">
                        <div class="icon">
                        <a href="#" onClick={(e) => {e.preventDefault(); goToMap();}}><i class="bi bi-geo-alt-fill"></i></a>
                        </div>
                        <div class="txt">
                            <h5>장소</h5>
                            <p><span id="myAddress">경기 수원시 영통구 월드컵로 206</span><a href="#" id="saveButton" onClick={(e) => {e.preventDefault(); copyAddress();}}><i class="bi bi-subtract"></i></a></p>
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