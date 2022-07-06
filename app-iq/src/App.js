//import logo from './logo.svg';
import './App.css';
import default_img from './assests/images/default_house.png'
import {useState} from 'react';


function App() {

    const [filtered, setFiltered] = useState(false);
    const stateTypes = [ 'Casa', 'Departamento', 'Negocio', 'Oficina', 'Terreno' ]
    const [filterType, setFilterType] = useState(stateTypes[0]);
    const states = [
        { name: 'Casa A', price: 150000, img: default_img, type: 'Casa' },
        { name: 'Casa B', price: 110000, img: default_img, type: 'Casa' },
        { name: 'Casa C', price: 200000, img: default_img, type: 'Casa' },
        { name: 'Depto A', price: 90000, img: default_img, type: 'Departamento' },
        { name: 'Depto B', price: 60000, img: default_img, type: 'Departamento' },
        { name: 'Depto C', price: 50000, img: default_img, type: 'Departamento' },
        { name: 'Terreno', price: 25000, img: default_img, type: 'Terreno' },
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
    
    return (
        <div className="App">
            <div className="navbar">
                <h4 className="navbar-element">Inicio</h4>
                <h4 className="navbar-element">Venta</h4>
                <h4 className="navbar-element">Alquiler</h4>
                <h4 className="navbar-element">Contacto</h4>
            </div>
            <div className="main-div">
                <h2 className="main-title">Garcia & Casanova Inmobiliaria</h2>
                <p className="main-description">
                Listado de propiedades a la venta
                </p>
            </div>
            <div className="main-div">
                
                {!filtered && <button className="btn btn-primary" onClick={()=>setFiltered(true)}>Filtrar</button>}
                {filtered && <button className="btn btn-primary" onClick={()=>setFiltered(false)}>Dejar de Filtrar</button>}
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
                    <div className="card-conteiner" >
                        <div className="card">
                            <img src={state.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">{state.name}</h4>
                                <p className="card-text">
                                    Este es un ejemplo de la descripcion de la propiedad en venta
                                </p>
                                <p className="card-text">
                                    <small className="">Precio: U$D {state.price}</small>
                                </p>
                                <a href="#" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default App;
