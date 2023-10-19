import './Common.css';
import './Benefit.css';
import { useMoreButtonFunction } from './MoreFunction';
import { useSnapFunction } from './SnapFunction';
import data from '../benefit.json';

function BenefitList() {
    // 콘텐츠 6개씩 보기
    const {
        displayItems,
        moreButtonVisible,
        closeButtonVisible,
        showMore,
        close
    } = useMoreButtonFunction(data.benefitData, 6);

    // 스냅 기능
    useSnapFunction('#section04 .content');

    return (
        <div id="main">
            <section id="section04">
                <div className="inner padding">
                    <div className="title">
                        <div>
                            <h3>참가혜택</h3>
                            <p>참가만 해도<br />혜택이 와르르!</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="benefit">
                            {displayItems.map(benefit => (
                                <div key={benefit.id}>
                                <div>
                                <img 
                                    src={benefit.img} 
                                    alt={benefit.title} 
                                />
                                </div>
                                <p>{benefit.title}</p>
                                </div>
                            ))}
                        </div>
                        {moreButtonVisible && <button onClick={showMore}><i className="bi bi-plus-circle-fill" id="moreButton04"></i></button>}
                        {closeButtonVisible && <button onClick={() => close('section04')}><i className="bi bi-dash-circle-fill" id="closeButton04"></i></button>}
                    </div>
                    <div className="textp">
                        <p>입주전시회에 오신 모든 입주자 분들께 드리는 혜택!</p>
                        <p>(본 혜택의 지급방식은 입주 예정자 카페를 참고하세요.)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BenefitList;
