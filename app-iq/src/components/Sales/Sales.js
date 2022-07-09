import {useState} from 'react';

import SubjetCard from '../SubjetCard';
import NavBar from '../NavBar/Navbar';

import default_img from './default_house.png'
//import default_img from './../../assets/images/default_house.png';
//import default_img from './../assests/images/default_house.png';
///assests/images/default_house.png app-iq\src\assests\images\default_house.png
const Sales = ({states}) => {
    console.log("states",states);
    const [filtered, setFiltered] = useState(false);
    const stateTypes = [ 'Casa', 'Departamento', 'Negocio', 'Oficina', 'Terreno' ] 
    const [filterType, setFilterType] = useState(stateTypes[0]);
    const descriptionEx = "Texto Ejemplo de descripción. Ubicada en el barrio Antartida Argentina ( fisherton sur) a metros de Av. Mendoza a la altura del 7900.Patio delantero en el ingreso parquizado , cochera pasante. La casa se desarrolla practicamente toda en planta baja. Living con entrepiso de madera, cocina comedor, lavadero independiente y dos dormitorios orientados al norte con ventilacion hacia el jardin del inmueble.";
    const statesB = [
        { id:0, location:'Rosario', description:descriptionEx, name: 'Casa A', price: 150000, img: default_img, type: 'Casa' },
        { id:1, location:'Rosario', description:descriptionEx, name: 'Casa B', price: 110000, img: default_img, type: 'Casa' },
        { id:2, location:'Rosario', description:descriptionEx, name: 'Casa C', price: 200000, img: default_img, type: 'Casa' },
        { id:3, location:'Rosario', description:descriptionEx, name: 'Depto A', price: 90000, img: default_img, type: 'Departamento' },
        { id:4, location:'Rosario', description:descriptionEx, name: 'Depto B', price: 60000, img: default_img, type: 'Departamento' },
        { id:5, location:'Rosario', description:descriptionEx, name: 'Depto C', price: 50000, img: default_img, type: 'Departamento' },
        { id:6, location:'Rosario', description:descriptionEx, name: 'Terreno', price: 25000, img: default_img, type: 'Terreno' },
    ]
    let finalStates = states
    function filterT(type){
        return states.filter(state => state.type === type)
    }
    if(filtered){
        finalStates = filterT(filterType)
    }else{
        finalStates = states;
    }
    const getName = () => {
        return !filtered ? 'Filtrar' : 'Dejar de filtrar'
    }
    ////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="App">
            <div className="main-div">
                <h2 className="main-title">Garcia & Casanova Inmobiliaria</h2>
                <p className="main-description">
                Listado de propiedades a la venta
                </p>
            </div>
            <div className="main-div">
                <button className="btn btn-primary" onClick={()=>setFiltered(!filtered)}>{getName()}</button>
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
export default Sales;