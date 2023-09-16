import './App.css';

function ItemList() {
    const itemDataList = [
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },
        { 
            title: "가전",
            img: "../images/item/appliance.jpg" 
        },

        // ... 추가
      ];

    // dataList를 두 부분으로 나눔
    const halfLength = Math.ceil(itemDataList.length / 2);
    const itemFirstHalf = itemDataList.slice(0, halfLength);
    const itemSecondHalf = itemDataList.slice(halfLength);

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
                    <i class="bi bi-plus-circle-fill" id="moreButton02"></i>
                    <i class="bi bi-dash-circle-fill" id="closeButton02" style={{display: 'none'}}></i>

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