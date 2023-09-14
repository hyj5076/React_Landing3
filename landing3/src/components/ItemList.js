import './App.css';

function ItemList() {
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
                        <div class="item">
                            <div>
                                <div class="itemimg"><img src="images/item/appliance.jpg" alt="가전" /></div>
                                <p>가전</p>
                            </div>
                        </div>
                        <div class="item">
                            <div>
                                <div class="itemimg"><img src="images/item/led.jpg" alt="LED" /></div>
                                <p>LED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default ItemList;