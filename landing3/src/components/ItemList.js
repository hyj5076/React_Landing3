import './App.css';

function ItemList() {
    const dataList = [
        { text: "내용1" },
        { text: "내용2" },
        { text: "내용3" },
        { text: "내용4" },
        { text: "내용5" },
        // ... 추가로 더 있을 수 있음
      ];

    // dataList를 두 부분으로 나눔
    const halfLength = Math.ceil(dataList.length / 2);
    const firstHalf = dataList.slice(0, halfLength);
    const secondHalf = dataList.slice(halfLength);

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

                    <div>
                        <div className="item">
                            <div className="item-container">
                                {firstHalf.map((item, index) => (
                                    <p key={index}>{item.text}</p>
                                ))}
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-container">
                                {secondHalf.map((item, index) => (
                                    <p key={index}>{item.text}</p>
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