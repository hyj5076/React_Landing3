import React, { useEffect, useState } from 'react';
import './App.css';

function Main() {
    const [sectionHeight, setSectionHeight] = useState(null);

    useEffect(() => {
        // 처음 로드될 때 섹션 높이 설정
        const initialSetSectionHeight = () => {
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;

            if (windowWidth >= 500) {
                setSectionHeight('100vh');
            } else {
                setSectionHeight(`${windowHeight}px`);
            }
        };

        // 처음 로드 시 기본 창 높이 유지
        initialSetSectionHeight();

        // 창 높이가 변경될 때마다 실행되는 함수
        const handleResize = () => {
            let windowWidth = window.innerWidth;

            //width 500 이상인 환경에서만 resize 됨
            if (windowWidth >= 500) {
                setSectionHeight('100vh');
            }
        };

        // 리사이즈 이벤트에 함수를 등록
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="main">
            <section id="section01">
                <div className="style active" style={{ height: sectionHeight }}>
                    <div className="title">
                        <div className="inner">
                            <h1>힐스테이트 푸르지오 수원</h1>
                            <p className="exhibition">입주전시회</p>
                            <p className="date">2023. 10. 21 토 - 10. 22 일</p>
                            <p className="time">10 AM - 6 PM</p>
                            <div className="btn"><a href="sub/booking.html">참가신청</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
