import './Common.css';
import './ItemList.css';
import { useMoreButtonFunction } from './MoreFunction';
import { useSnapFunction } from './SnapFunction';

function ItemList() {

    const itemDataList = [
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "커튼",
            img: "../images/item/curtain.jpg" 
        },
        { 
            title: "단열필름",
            img: "../images/item/film.jpg"
        },
        { 
            title: "가구",
            img: "../images/item/furniture.jpg"
        },
        { 
            title: "에어컨설치",
            img: "../images/item/aircon_fix.jpg"
        },
        { 
            title: "벽걸이TV",
            img: "../images/item/wallTV.jpg"
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "인덕션",
            img: "../images/item/induction.jpg"
        },
        { 
            title: "음식물처리기",
            img: "../images/item/garbage.jpg"
        },
        { 
            title: "사전점검",
            img: "../images/item/pre_check.jpg"
        },
        { 
            title: "이사",
            img: "../images/item/move.jpg"
        },
        { 
            title: "중문",
            img: "../images/item/middle_door.jpg"
        },
        { 
            title: "인터넷",
            img: "../images/item/internet.jpg"
        },
        { 
            title: "LED",
            img: "../images/item/led.jpg"
        },
        { 
            title: "렌탈",
            img: "../images/item/rental.jpg" 
        },
        { 
            title: "선반/냉장고장",
            img: "../images/item/shelf.jpg"
        },
        { 
            title: "인테리어",
            img: "../images/item/interior.jpg"
        },
        { 
            title: "줄눈",
            img: "../images/item/line.jpg"
        },
        { 
            title: "베란다칠",
            img: "../images/item/veranda.jpg"
        },
        { 
            title: "시스템에어컨",
            img: "../images/item/system_aircon.jpg"
        },
        { 
            title: "층간소음방지",
            img: "../images/item/noise_mat.jpg"
        },
        { 
            title: "새집증후군",
            img: "../images/item/newhouse.jpg"
        },
        { 
            title: "미세망/방범방충망",
            img: "../images/item/net.jpg"
        },
        { 
            title: "나노코팅",
            img: "../images/item/nano_coating.jpg"
        }
    ];

    // 콘텐츠 8개씩 보기
    const {
    displayItems,
    moreButtonVisible,
    closeButtonVisible,
    showMore,
    close
    } = useMoreButtonFunction(itemDataList, 8);

    // 스냅 기능
    useSnapFunction('#section02 .content');

    // dataList를 두 부분으로 나눔
    const halfLength = Math.ceil(displayItems.length / 2);
    const itemFirstHalf = displayItems.slice(0, halfLength);
    const itemSecondHalf = displayItems.slice(halfLength);

    return (
        <div id="main">
            <section id="section02">
                <div class="inner padding">
                    <div class="title">
                        <div>
                            <h3>참여품목</h3>
                            <p>입주를 위한<br />모든 것이 한곳에!</p>
                        </div>
                    </div>
                    
                    {moreButtonVisible && <button onClick={showMore}><i class="bi bi-plus-circle-fill" id="moreButton02"></i></button>}
      {closeButtonVisible && <button onClick={() => close('section02')}><i class="bi bi-dash-circle-fill" id="closeButton02"></i></button>}

                    <div class="content">
                        <div>
                            <div className="item">
                                {itemFirstHalf.map((item, index) => (
                                    <div>
                                        <div className='itemimg'><img src={item.img} alt={item.title} /></div>
                                        <p key={index}>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="item">
                                {itemSecondHalf.map((item, index) => (
                                    <div>
                                        <div className='itemimg'><img src={item.img} alt={item.title} /></div>
                                        <p key={index}>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ItemList;