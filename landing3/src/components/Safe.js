import './Common.css';
import './Safe.css';

function Safe() {
  return (
    <div id="main">
        <section id="section07">
            <div className="inner padding">
                <div className="title">
                    <div>
                        <h3>안전시설</h3>
                    </div>
                </div>

                <div className="content">
                    <div className="icon">
                        <ul>
                            <li>
                                <div>
                                    <div className="box"><i className="bi bi-heart-pulse-fill"></i></div>
                                    <p>구급안전요원 대기</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="box"><i className="bi bi-tag-fill"></i></div>
                                    <p>미아방지태그 운영</p>
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

export default Safe;
