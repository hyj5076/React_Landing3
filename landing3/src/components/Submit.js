import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import './Submit.css';

function Submit() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [isPopupActive, setIsPopupActive] = useState(false);
    const [agreement, setAgreement] = useState(false);
    
    const [tel, setTel] = useState("");
    const [dong, setDong] = useState("");
    const [ho, setHo] = useState("");
    const [name, setName] = useState("");

    const dongInputRef = useRef(null);
    const hoInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const telInputRef = useRef(null);
    const agreeIconRef = useRef(null);

    // 팝업
    const togglePopup = () => {
        setIsPopupActive(!isPopupActive);
    }

    const validateForm = () => {
        const fields = [
            { value: dong, ref: dongInputRef, message: "입주예정 동을 입력해주세요." },
            { value: ho, ref: hoInputRef, message: "입주예정 호를 입력해주세요." },
            { value: name, ref: nameInputRef, message: "성명을 입력해주세요." },
            { value: tel, ref: telInputRef, message: "연락처를 입력해주세요." },
        ];
    
        for (let field of fields) {
            if (!field.value) {
                alert(field.message);
                field.ref.current.focus();
                return false;
            }
        }
    
        if (!agreement) {
            alert("개인정보 활용 수집 이용에 동의하여야 사전예약이 가능합니다.");
    
            // 팝업 펼치기
            setIsPopupActive(true);
            return false;
        }
    
        return true;
    };
    

    // 높이 변경
    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    // 숫자만 반환하는 함수
    const onlyNumbers = (value) => value.replace(/[^0-9]/g, "");

    const handleInputChange = (setter, inputRef, nextInputRef) => (e) => {
        const value = onlyNumbers(e.target.value);
        setter(value); // 상태 업데이트

        // 4자리가 되면 다음 인풋으로 넘김
        if (inputRef.current && nextInputRef.current && value.length >= 4) {
            nextInputRef.current.focus();
        }
    };

    // 하이픈 자동 추가
    const formatTel = (value) => {
        const val = value.replace(/[^0-9]/g, "");
        
        if (val.length <= 3) {
            return val;
        } else if (val.length <= 7) {
            return val.replace(/(\d{3})(\d{1,4})/, "$1-$2");
        } else {
            return val.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
        }
    };

    const handleTelInputChange = (e) => {
        setTel(formatTel(e.target.value));
    };

    // 숫자 한개씩 지우기
    const handleTelKeyDown = (e) => {
        if (e.key === "Backspace") {
            let newVal = tel.replace(/[^0-9]/g, "");
            
            if (tel.endsWith("-")) { // 만약 입력값이 하이픈으로 끝난다면
                newVal = newVal.substring(0, newVal.length - 1); // 숫자를 하나 더 삭제
            } else {
                newVal = newVal.substring(0, newVal.length);
            }
            
            setTel(formatTel(newVal));
        }
    };

    // 초기화 버튼
    const resetForm = () => {
        setDong("");
        setHo("");
        setName("");
        setTel("");
    };
    
  return (
  <div id="main">
    <section id="section00">
        <div className="style1 inner-sub" style={{ height: `${windowHeight}px` }}>
        <div className="title">
                <p className="logo"><Link to="/" >EDEN C&S</Link></p>
                <h1>힐스테이트 푸르지오 수원</h1>
                <p className="exhibition">입주전시회 사전예약</p>

                <div className="input_text">
                    <input 
                        id="dongInput"
                        ref={dongInputRef} 
                        type="text" 
                        value={dong}
                        placeholder="입주예정 동" 
                        maxlength="4" 
                        onChange={handleInputChange(setDong, dongInputRef, hoInputRef)} 
                    />
                    <input 
                        id="hoInput"
                        ref={hoInputRef} 
                        type="text" 
                        value={ho}
                        placeholder="입주예정 호" 
                        maxlength="4" 
                        onChange={handleInputChange(setHo, hoInputRef, nameInputRef)} 
                    />
                    <input 
                        id="nameInput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={nameInputRef} 
                        type="text" 
                        placeholder="성명" 
                        maxlength="10" 
                    />
                    <input
                        ref={telInputRef}
                        id="telInput"
                        type="text"
                        value={tel}
                        placeholder="연락처"
                        maxlength="13"
                        onChange={handleTelInputChange}
                        onKeyDown={handleTelKeyDown}
                    />
                </div>

                <div className="agree active-rotate">
                    <h3 onClick={togglePopup}>
                        개인정보 활용 수집 이용 동의
                        <i 
                            ref={agreeIconRef}
                            className={`bi ${isPopupActive ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}
                        />
                    </h3>
                    <div 
                        className={`active-popup ${isPopupActive ? 'open' : ''}`} 
                    >
                        <p>1. 개인정보 활용, 이용의 목적 : 소유주 명부 등재, 채팅방 및 네이버 카페, 밴드 등 초대, 홍보, 안내, 설문. 경품추첨 당첨 시 입주민 여부 확인, 비상 시 연락 등 입주 박람회 관련 업무 일체</p>
                        <p>2. 개인정보 목록 : 이름, 연락처(휴대전화번호), 주소, 소유 동 호수</p>
                        <p>3. 개인정보의 처리 및 보유기간 : 3년</p>
                        <p>4. 개인정보 제공을 거부할 수 있다는 사실 및 거부 시의 불이익 고지 : 상기 정보의 정보를 거부할 수 있으나, 입주박람회 경품 추첨에 참여할 수 없고, 이든씨엔에스의 홍보, 정보, 진행단계, 안내를 받을 수 없음.</p>
                        <p>
                        <input 
                            id="agreementCheckbox" 
                            type="checkbox"
                            onChange={(e) => setAgreement(e.target.checked)}
                         /> 
                         위 사항을 모두 읽었으며, 개인정보 활용에 동의함</p>
                    </div>
                </div>
                <div className="btn">
                    <Link 
                        className="submit_btn" 
                        to='/Success' 
                        onClick={(e) => {
                            if (!validateForm()) {
                                e.preventDefault();
                            }
                        }}>
                    신청하기
                    </Link>
                    <Link 
                        onClick={resetForm}
                    >초기화
                    </Link>
                </div>
            </div>
        </div>
    </section>
</div>
  );
}

export default Submit;
