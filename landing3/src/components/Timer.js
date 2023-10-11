import './Common.css';
import './Timer.css';
import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

function Timer() {
    const exhibitionDate = useMemo(() => new Date('2023-12-16T10:00:00'), []);
    const [time, setTime] = useState({
        days: 0,
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const updateCountdown = () => {
            let currentDate = new Date();
            let timeDiff = exhibitionDate.getTime() - currentDate.getTime();

            let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000).toString().padStart(2, '0');

            setTime({
                days,
                hours,
                minutes,
                seconds
            });
        };

        const timerId = setInterval(updateCountdown, 1000);

        return () => clearInterval(timerId); // 컴포넌트가 unmount될 때 타이머를 제거
    }, [exhibitionDate]);

    return (
        <div id="main">
            <section id="section09">
                <div className="inner padding">
                    <div className="title">
                        <div>
                            <h3>사전예약</h3>
                            {time.days === 0 && time.hours === '00' && time.minutes === '00' && time.seconds === '00' 
                                ? <p>감사합니다. 사전예약이 끝났습니다!</p> 
                                : <p>입주전시회까지 남은 시간</p>}
                        </div>
                    </div>

                    {time.days === 0 && time.hours === '00' && time.minutes === '00' && time.seconds === '00' 
                        ? null 
                        : (
                            <div id="removeTime" className="content">
                                <div className="timer">
                                    <div className="dday">
                                        <p id="days">{time.days}일</p>
                                        <p><span id="countdown">{time.hours}:{time.minutes}:{time.seconds}</span></p>
                                    </div>
                                    <div className="circle">
                                        <div className="subcircle"></div>
                                    </div>
                                    <div className="submitbtn">
                                        <Link to="/submit">참가신청</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default Timer;
