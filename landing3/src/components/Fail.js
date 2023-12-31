import './Submit.css';
//import { Link } from 'react-router-dom';

function Fail() {

    return (
        <div id="main">
            <section id="section00">
                <div className="style1 inner-sub">
                    <div className="title">
                        <p className="logo"><Link to="/">EDEN C&S</Link></p>

                       <div className="result">
                            <p>이미 예약된 정보입니다.</p>
                            <p className="result_call">고객 문의 1522 - 4229</p>
                       </div>
                       <div className="submitbtn">
                            <Link to="/">메인으로 돌아가기</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Fail;