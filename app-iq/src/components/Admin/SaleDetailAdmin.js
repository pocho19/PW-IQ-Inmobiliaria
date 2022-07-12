import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet, httpPost } from '../../utils/httpFunctions';

const SaleDetail = ({...props}) => {
    let { id } = useParams();

    /// http requests
    const [state, setState] = useState([]);

    const fetchStates = () => {
        httpGet('api/states/' + id + '/')
            .then((res) => setState(res.data) )
        
    }
    useEffect(fetchStates, []) // dependencias vacias, solo se ejecuta una vez
    // useEffect(fetchStates, ) // sin dependecias, se ejecuta cada vez que se cambia el estado

    return (
        <div className="state-detail">
            <div className="state-detail__header ">
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

