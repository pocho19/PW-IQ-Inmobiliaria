import { Link } from "react-router-dom";


function SubjetCard({state}) {
  return (
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
                <Link to={'/sales/detail'}><a className="btn btn-primary">Ver mas</a></Link>
            </div>
        </div>
    </div>
    );
}
export default SubjetCard;