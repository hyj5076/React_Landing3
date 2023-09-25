import './Common.css';
import './ItemList.css';
import { useMoreButtonFunction } from './MoreFunction';
import { useSnapFunction } from './SnapFunction';
import data from "../itemList.json";

function ItemGroup({ items }) {
    return (
        <div className="item">
            {items.map(item => (
                <div key={item.id}>
                    <div className='itemimg'><img src={item.img} alt={item.title} /></div>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

function ItemDataList() {

    // 콘텐츠 8개씩 보기
    const {
    displayItems,
    moreButtonVisible,
    closeButtonVisible,
    showMore,
    close
    } = useMoreButtonFunction(data.itemData, 8);

    // 스냅 기능
    useSnapFunction('#section02 .content');

    // dataList를 두 부분으로 나눔
    const halfLength = Math.ceil(displayItems.length / 2);
    const itemFirstHalf = displayItems.slice(0, halfLength);
    const itemSecondHalf = displayItems.slice(halfLength);

    return (
        <div id="main">
            <section id="section02">
                <div className="inner padding">
                    <div className="title">
                        <div>
                            <h3>참여품목</h3>
                            <p>입주를 위한<br />모든 것이 한곳에!</p>
                        </div>
                    </div>
                    
                    {moreButtonVisible && <button onClick={showMore}><i className="bi bi-plus-circle-fill" id="moreButton02"></i></button>}
                    {closeButtonVisible && <button onClick={() => close('section02')}><i className="bi bi-dash-circle-fill" id="closeButton02"></i></button>}

                    <div className="content">
                        <div>
                            <ItemGroup items={itemFirstHalf} />
                            <ItemGroup items={itemSecondHalf} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ItemDataList;