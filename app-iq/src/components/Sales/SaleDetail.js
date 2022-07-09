
const SaleDetail = ({ state }) => {
    return (
        <div className="state-detail">
        <div className="state-detail__header">
            <div className="state-detail__header-left">
            <div className="state-detail__header-left-name">
                <h1>{state.name}</h1>
            </div>
            <div className="state-detail__header-left-price">
                <h2>{state.price}</h2>
            </div>
            </div>
        </div>
        <div className="state-detail__body">
            <div className="state-detail__body-description">
            <p>{state.description}</p>
            </div>
            <div className="state-detail__body-location">
            <p>{state.location}</p>
            </div>
        </div>
        </div>
    );
}
export default SaleDetail;
/*
            <div className="state-detail__header-right">
            <div className="state-detail__header-right-date">
                <h3>{state.date}</h3>
            </div>
            <div className="state-detail__header-right-time">
                <h3>{state.time}</h3>
            </div>
            </div>



*/

