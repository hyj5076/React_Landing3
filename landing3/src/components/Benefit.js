import './App.css';
import { useMoreButtonFunction } from './MoreFunction';
import { useSnapFunction } from './SnapFunction';

function Benefit() {
    useSnapFunction('#section04 .content');
    
    const benefitDataList = [
        {
            title: "무선 LED 무드등 증정",
            img: "images/gift/led.jpg"
        },
        {
            title: "박람회 할인권",
            img: "images/gift/sail.jpg"
        },
        {
            title: "부엌 인테리어 할인",
            img: "images/gift/kitchen.jpg"
        },
        {
            title: "커튼 무료 설치",
            img: "images/gift/curtain.jpg"
        },
        {
            title: "화재보험",
            img: "images/gift/fire.jpg"
        },
        {
            title: "욕실 나노코팅 무상시공",
            img: "images/gift/bath.jpg"
        },
        {
            title: "싱크대 나노코팅 무상시공",
            img: "images/gift/sink.jpg"
        },
        {
            title: "드레스룸 콤비 블라인드 무상시공",
            img: "images/gift/dress.jpg"
        }
    ];

    // 화면 너비 감지
    const {
        displayItems,
        moreButtonVisible,
        closeButtonVisible,
        showMore,
        close
      } = useMoreButtonFunction(benefitDataList, 6);


    return (
        <div id="main">
            <section id="section04">
                <div class="inner padding">
                    <div class="title">
                        <div>
                            <h3>참가혜택</h3>
                            <p>참가만 해도<br />
                                혜택이 와르르!</p>
                        </div>
                    </div>

                    <div class="content">
                        <div>
                            <div class="benefit">
                            {displayItems.map((benefit, index) => (
                                <div>
                                    <div><img src={benefit.img} alt={benefit.title}/></div>
                                    <p key={index}>{benefit.title}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        {moreButtonVisible && <button onClick={showMore}><i class="bi bi-plus-circle-fill" id="moreButton04"></i></button>}
      {closeButtonVisible && <button onClick={() => close('section04')}><i class="bi bi-dash-circle-fill" id="closeButton04"></i></button>}
                    </div>
                    
                    <div class="textp">
                        <p>입주전시회에 오신 모든 입주자 분들께 드리는 혜택!</p>
                        <p>(본 혜택의 지급방식은 입주 예정자 카페를 참고하세요.)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Benefit;
