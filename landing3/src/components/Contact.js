import './Common.css';
import './Contact.css';

function Contact() {
  return (
    <div id="main">
        <section id="section">
            <div className="inner padding">
                <div className="title">
                    <div>
                        <h3>고객센터</h3>
                    </div>
                </div>

                <div className="content">
                    <div className="call">
                        <ul>
                            <li>
                                <div><a href="tel:010-1234-1234" className="box"><i className="bi bi-telephone-fill"></i></a></div>
                            </li>
                            <li>
                                <div><a href="https://cs.kakao.com/" className="box"><i className="bi bi-chat-dots-fill"></i></a></div>
                            </li>
                            <li>
                                <div><a href="https://edencns.kr/AS%EB%AC%B8%EC%9D%98" className="box"><i className="bi bi-house-door-fill"></i></a></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="license">
                    <p>© Copyright EDEN C&S.</p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Contact;
