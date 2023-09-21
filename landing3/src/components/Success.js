import './Submit.css';
import { Link } from 'react-router-dom';

function Success() {

    return (
        <div id="main">
            <section id="section00">
                <div class="style1 inner-sub">
                    <div class="title">
                        <p class="logo"><Link to="/">EDEN C&S</Link></p>

                       <div class="result">
                            <p>사전 예약이 완료되었습니다.</p>
                            <p>감사합니다.</p>
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

export default Success;
