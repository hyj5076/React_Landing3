import './Common.css';
import './ShopList.css';
import { useEffect } from 'react';

function ShopList() {  

    useEffect(() => {
        // 롤링 배너 복제본 생성
        const roller = document.querySelector('.roller');
        if (!roller) return;

        roller.id = 'roller1';
        
        const clone = roller.cloneNode(true);
        clone.id = 'roller2';
        document.querySelector('.roller-wrap').appendChild(clone); //부착
        
        //원본, 복제본 배너 위치 지정
        document.querySelector('#roller1').style.left = '0px';
        document.querySelector('#roller2').style.left = `${document.querySelector('.roller > div').offsetWidth}px`;
        
        //클래스 할당
        roller.classList.add('original');
        clone.classList.add('clone');
    }, []);

    const shopDataList = [
        {
            title: "사려니가구",
            img: "images/logo/saryeni.png"
        },
        {
            title: "공기수비대",
            img: "images/logo/airguard.png"
        },
        {
            title: "뷰티클린",
            img: "images/logo/beautyclean.png"
        },
        {
            title: "반딧불이",
            img: "images/logo/light.png"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "코웨이",
            img: "images/logo/coway.png"
        },
        {
            title: "가화",
            img: "images/logo/gawha.png"
        },
        {
            title: "제이택",
            img: "images/logo/jtech.png"
        },
        {
            title: "세라믹프로",
            img: "images/logo/ceramic_pro.png"
        },
        {
            title: "코럼",
            img: "images/logo/corum.png"
        },
        {
            title: "인포유",
            img: "images/logo/inforu.png"
        },
        {
            title: "디자인다나",
            img: "images/logo/dana.png"
        },
        {
            title: "메종",
            img: "images/logo/maison.png"
        },
        {
            title: "딜라이브",
            img: "images/logo/dlive.png"
        },
        {
            title: "예림도어",
            img: "images/logo/yerim.png"
        },
        {
            title: "휴렉",
            img: "images/logo/hulec.png"
        },
        {
            title: "아가앤매트",
            img: "images/logo/aga.png"
        },
        {
            title: "반짝반짝",
            img: "images/logo/twinkle.png"
        },
        {
            title: "가브커튼",
            img: "images/logo/gav.png"
        },
        {
            title: "vip디자인",
            img: "images/logo/vip.png"
        },
        {
            title: "헨지",
            img: "images/logo/henzy.png"
        },
        {
            title: "하이마트",
            img: "images/logo/himart.png"
        },
        {
            title: "LG전자",
            img: "images/logo/lg.png"
        },
        {
            title: "미러클",
            img: "images/logo/mglass.png"
        },
        {
            title: "싱크리더",
            img: "images/logo/sinkleader.png"
        },
        {
            title: "니치039",
            img: "images/logo/nichy.png"
        },
        {
            title: "탄성플러스",
            img: "images/logo/plus.png"
        }
    ];

    const shopHalfLength = Math.ceil(shopDataList.length / 2);
    const shopFirstHalf = shopDataList.slice(0, shopHalfLength);
    const shopSecondHalf = shopDataList.slice(shopHalfLength);
    
    return (
        <div id="main">
            <section id="section03">
                <div class="inner padding">
                    <div class="title">
                        <div>
                            <h3>참여업체</h3>
                            <p>1000여 개의<br />
                                업체와 함께,</p>
                        </div>
                    </div>

                    <div class="content flow-container roller-wrap">
                        <div class="flow-text slider-container roller">
                            <div class="shop flow-wrap">
                                {shopFirstHalf.map((shop) => (
                                    <div>
                                        <div class="shopimg"><img src={shop.img} alt={shop.title} /></div>
                                    </div>
                                ))}
                            </div>
                            <div class="shop flow-wrap">   
                                {shopSecondHalf.map((shop) => (
                                    <div>
                                        <div class="shopimg"><img src={shop.img} alt={shop.title} /></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div class="textp">
                        <p>해당 전시에 참여하는 업체는 위와 같습니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShopList;
