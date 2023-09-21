import './Common.css';
import './Payment.css';

function Payment() {
  return (
    <div id="main">
        <section id="section08">
              <div className="inner padding">
                  <div className="title">
                      <div>
                          <h3>결제방법</h3>
                          <p>믿을 수 있는
                             <br />투명한 결제방식</p>
                      </div>
                  </div>

                  <div className="content">
                      <div className="payment">
                          <ul>
                              <li>
                                  <div className="box"><i className="bi bi-coin"></i></div>
                                  <div>
                                      <h4>계약금 상한제</h4>
                                      <p>입주예정자(계약자)에게
                                      계약금 0~10% 미만 상한제 실시
                                      (가전제품 등의 경우 예외)
                                      </p>
                                  </div>
                              </li>
                              <li>
                                  <div className="box"><i className="bi bi-credit-card-fill"></i></div>
                                  <div>
                                      <h4>카드결제 가능</h4>
                                      <p>카드결제 시 현금과 동일한 가격으로 결제
                                      (모든 품목 VAT 포함가)
                                      </p>
                                  </div>
                              </li>
                              <li>
                                  <div className="box"><i className="bi bi-file-earmark-text-fill"></i></div>
                                  <div>
                                      <h4>현금영수증 의무 발행</h4>
                                      <p>현금영수증 또는 세금계산서 의무 발행</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  );
}

export default Payment;
