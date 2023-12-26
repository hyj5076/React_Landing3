import "./Common.css";
import "./Schedule.css";
import { Link } from "react-router-dom";

import ShowDdayFunction from "./showDdayFunction";

function Schedule() {
  // Google 지도 링크 생성
  const goToMap = () => {
    const addressElement = document.querySelector("#myAddress");
    const addressText = addressElement.innerText;

    const mapLink =
      "https://www.google.co.kr/maps/?hl=ko&entry=ttu&q=" +
      encodeURIComponent(addressText);

    window.open(mapLink, "_blank");
  };

  // 주소 복사 기능
  const copyAddress = () => {
    const addressElement = document.querySelector("#myAddress");
    // div의 내용(textContent)을 복사한다.
    window.navigator.clipboard
      .writeText(addressElement.textContent)
      .then(() => {
        // 복사가 완료되면 호출된다.
        alert("주소를 복사했습니다.");
      });
  };

  return (
    <div id="main">
      <section id="section06">
        <div className="inner padding">
          <div className="title">
            <div>
              <h3>전시회 일정/장소</h3>
              <p>힐스테이트 푸르지오 수원</p>
            </div>
          </div>

          <div className="content">
            <div className="date date0">
              <ShowDdayFunction />
              <div className="txt">
                <h5>일정</h5>
                <p>
                  2024 <span>12.28</span> 토 - <span>12.29</span> 일{" "}
                </p>
                <p>10AM - 6PM</p>
              </div>
            </div>

            <div className="place">
              <div className="icon">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    goToMap();
                  }}
                >
                  <i className="bi bi-geo-alt-fill"></i>
                </Link>
              </div>
              <div className="txt">
                <h5>장소</h5>
                <p>
                  <span id="myAddress">경기 수원시 영통구 월드컵로 206</span>
                  <Link
                    id="saveButton"
                    onClick={(e) => {
                      e.preventDefault();
                      copyAddress();
                    }}
                  >
                    <i className="bi bi-subtract"></i>
                  </Link>
                </p>
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
