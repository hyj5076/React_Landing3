import './App.css';

function ShopList() {
    
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
                            <div>
                                <div class="shopimg"><img src="images/logo/saryeni.png" alt="사려니가구" /></div>
                            </div>
                        </div>
                        <div class="shop flow-wrap">   
                            <div>
                                <div class="shopimg"><img src="images/logo/yerim.png" alt="예림도어" /></div>
                            </div>
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
