import './App.css';
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
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
        {
            title: "삼성전자",
            img: "images/item/appliance.jpg"
        },
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
