import {useEffect, useState} from 'react';

import SubjetCard from '../SubjetCard';

import axios from 'axios';

//const axios = require('axios');

import default_img from './default_house.png'
import { httpGet, httpPost } from '../../utils/httpFunctions';
//import default_img from './../../assets/images/default_house.png';
//import default_img from './../assests/images/default_house.png';
///assests/images/default_house.png app-iq\src\assests\images\default_house.png
const Rentals = ({}) => {

    /// http requests
    const [states, setStateBack] = useState([]);

    const fetchStates = () => {
        httpGet('api/states_rentals/')
            .then(res => setStateBack(res.data) )
    }
    const createSales = (state) => {
        httpPost('api/states_rentals', state)
            .then(fetchStates)
    }
    useEffect(fetchStates, []) // dependencias vacias, solo se ejecuta una vez
    // useEffect(fetchStates, ) // sin dependecias, se ejecuta cada vez que se cambia el estado

    const [filtered, setFiltered] = useState(false);

    axios.defaults.withCredentials = true;

    const stateTypes = [ 'Casa', 'Departamento', 'Negocio', 'Oficina', 'Terreno', 'PH' ] 
    const [filterType, setFilterType] = useState(stateTypes[0]);

    
    let finalStates = states

    function filterT(type){
        return states.filter(state => state.type === type)
    }

    if(filtered){
        finalStates = filterT(filterType)
    }else{
        // finalStates = states;
    }
    const getName = () => {
        return !filtered ? 'Filtrar' : 'Dejar de filtrar'
    }
    ////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="App p-5">
            <div className="main-div">
                <h2 className="main-title">Garcia & Casanova Inmobiliaria</h2>
                <p className="main-description">
                Listado de propiedades en alquiler
                </p>
            </div>
            <div className="main-div">
                <button className="btn btn-primary" onClick={()=>setFiltered(!filtered)}>{getName()}</button>
                <p/>
                {!filtered && <div className="filter-div">
                    <select className="select-type" defaultValue={filterType} onChange={
                        (e)=>{
                            setFilterType(e.target.value)
                        }
                    }>
                    {stateTypes.map((type)=>{
                        return <option value={type}>{type}</option>
                    }
                    )}
                    </select>
                </div>
                }
                {filtered && <h5 className="filter-description">Filtrado por: {filterType}</h5>}
            </div>
            <div className="all-cards">
                {
                finalStates
                //.filter((state) => filtered?state.type === filterType:true)
                .map(
                    (state) =>
                    <SubjetCard state={state}/>
                )
                }
            </div>
        </div>
    );
}
export default Rentals;