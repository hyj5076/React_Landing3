import React from 'react';
import { Link } from 'react-router-dom';
import './Submit.css';

function Submit() {
  return (
  <div id="main">
    <section id="section00">
        <div className="style0 inner-sub">
        <div className="title">
                <p className="logo"><a href="../index.html">EDEN C&S</a></p>
                <h1>힐스테이트 푸르지오 수원</h1>
                <p className="exhibition">입주전시회 사전예약</p>

                <div className="input_text">
                    <input id="dongInput" type="text" placeholder="입주예정 동" maxlength="4" />
                    <input id="hoInput" type="text" placeholder="입주예정 호" maxlength="4" />
                    <input id="nameInput" type="text" placeholder="성명" maxlength="10" />
                    <input id="telInput" type="text" placeholder="연락처" maxlength="13" />
                </div>

                <div className="agree active-rotate">
                    <h3>개인정보 활용 수집 이용 동의<i className="bi bi-caret-down-fill"></i></h3>
                    <div className="active-popup">
                        <p>1. 개인정보 활용, 이용의 목적 : 소유주 명부 등재, 채팅방 및 네이버 카페, 밴드 등 초대, 홍보, 안내, 설문. 경품추첨 당첨 시 입주민 여부 확인, 비상 시 연락 등 입주 박람회 관련 업무 일체</p>
                        <p>2. 개인정보 목록 : 이름, 연락처(휴대전화번호), 주소, 소유 동 호수</p>
                        <p>3. 개인정보의 처리 및 보유기간 : 3년</p>
                        <p>4. 개인정보 제공을 거부할 수 있다는 사실 및 거부 시의 불이익 고지 : 상기 정보의 정보를 거부할 수 있으나, 입주박람회 경품 추첨에 참여할 수 없고, 이든씨엔에스의 홍보, 정보, 진행단계, 안내를 받을 수 없음.</p>
                        <p><input id="agreementCheckbox" type="checkbox" /> 위 사항을 모두 읽었으며, 개인정보 활용에 동의함</p>
                    </div>
                </div>
                <div className="btn">
                    <a href="../sub/success.html" onclick="return validateForm()">신청하기</a>
                    <Link to="/submit">신청하기</Link>
                    <a href="#" onclick="resetForm()">초기화</a>
                </div>
            </div>
        </div>
    </section>
</div>
  );
}

export default Submit;
