import './Common.css';

function Contact() {
  return (
    <div id="main">
        <section id="section">
            <div class="inner padding">
                <div class="title">
                    <div>
                        <h3>고객센터</h3>
                    </div>
                </div>

                <div class="content">
                    <div class="call">
                        <ul>
                            <li>
                                <div><a href="tel:010-1234-1234" class="box"><i class="bi bi-telephone-fill"></i></a></div>
                            </li>
                            <li>
                                <div><a href="https://cs.kakao.com/" class="box"><i class="bi bi-chat-dots-fill"></i></a></div>
                            </li>
                            <li>
                                <div><a href="https://edencns.kr/AS%EB%AC%B8%EC%9D%98" class="box"><i class="bi bi-house-door-fill"></i></a></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="license">
                    <p>© Copyright EDEN C&S.</p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Contact;
