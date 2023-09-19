import './App.css';
import { useMoreButtonFunction } from './MoreFunction';

function Benefit() {
    
    const benefitDataList = [
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        },
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        },
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        },
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        },
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        },
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        },
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        },
        {
            title: "무선 LED 무드등 증정",
            img: "images/item/appliance.jpg"
        }
    ];

    const {
        displayItems,
        moreButtonVisible,
        closeButtonVisible,
        showMore,
        close,
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
