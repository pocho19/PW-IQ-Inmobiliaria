import { useParams } from "react-router-dom";

const SaleDetail = ({ states }) => {
    let { id } = useParams();
    return (
        <div className="state-detail">
        <div className="state-detail__header">
            <div className="state-detail__header-left">
            <div className="state-detail__header-left-name">
                <h1>{states[id].name}</h1>
            </div>
            <div className="state-detail__header-left-price">
                <h2>{states[id].price}</h2>
            </div>
            </div>
        </div>
        <div className="state-detail__body">
            <div className="state-detail__body-description">
            <p>{states[id].description}</p>
            </div>
            <div className="state-detail__body-location">
            <p>{states[id].location}</p>
            </div>
        </div>
        </div>
    );
}
export default SaleDetail;
/*
            <div className="state-detail__header-right">
            <div className="state-detail__header-right-date">
                <h3>{states[id].date}</h3>
            </div>
            <div className="state-detail__header-right-time">
                <h3>{states[id].time}</h3>
            </div>
            </div>



*/

