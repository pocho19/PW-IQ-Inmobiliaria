import SubjetCard from '../SubjetCard';
import { useEffect, useState } from 'react';
import { httpGet, httpPost } from '../../utils/httpFunctions';
import { useHistory } from 'react-router-dom';
const axios = require('axios');

const States = () => {
    const [states, setStates] = useState([]);

    const isAdmin = localStorage.getItem("user2");
    const history = useHistory();
    useEffect(() => {
        if(!isAdmin){
            history.push('/login');
        }
    });
    
    const fetchStates = () => {
        httpGet('api/states/')
            .then((res) => setStates(res.data) )
    }

    const createState = () => {
        httpPost('api/states/', {
            name: name,
            description: description,
            owner: owner,
            price: price,
        })
            .then(fetchStates)
    }

    useEffect(fetchStates, [])


    const [state, setState] = useState([]);

    const [name, setName] =useState([])
    const [address, setAddress] =useState([])
    const [location, setLocation] =useState([])
    const [postCode, setPostCode] =useState([])
    const [type, setType] =useState([])
    const [sale, setSale] =useState([true])
    const [price, setPrice] =useState([])
    const [rent, setRent] =useState([true])
    const [rentPrice, setRentPrice] =useState([])
    const [rentMode, setRentMode] =useState([])
    const [owner, setOwner] =useState([])
    const [description, setDescription] =useState([])

    let st = {
        name,
        address,
        location,
        postCode,
        type,
        sale,
        price,
        rent,
        rentPrice,
        rentMode,
        owner,
        description
    }

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
        return !filtered ? 'Filtrar' : ' Dejar de filtrar'
    }

    return (
        <div className='states-cont' style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px'
            }
        }>  
            <div className="main-div">
                <h2 className="main-title">Garcia & Casanova Inmobiliaria</h2>
                <p className="main-description">
                Agegar una propiedad
                </p>
            </div>
            <form className="form-group" onSubmit={(e)=>{
                e.preventDefault();
                createState(st)
            }
            }>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="nombre"
                        value={name} onChange={ (e)=>{setName(e.target.value)} }/>
                    </div>
                    <div className="col">
                        <input type="s" className="form-control" placeholder="precio"
                        value={price} onChange={ (e)=>{setPrice(e.target.value)} }/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="descripcion"
                        value={description} onChange={ (e)=>{setDescription(e.target.value)} }/>
                    </div>
                    <div className="col">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="duenio"
                        value={owner} onChange={ (e)=>{setOwner(e.target.value)} }/>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-secondary" onClick={
                            (e)=>{
                                e.preventDefault();
                                createState();
                            }
                        }>Agregar</button>
                </div>
            </form>
            <p/>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={()=>setFiltered(!filtered)}>{getName()}</button>
                    </div>
                {!filtered && <div className="filter-div col">
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
                {filtered && <div className='col'> <h6 className="filter-description">Filtrado por: {filterType}</h6></div>}
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
export default States;
