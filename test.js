const stateTypes = [ 'Casa', 'Departamento' ]





<select className="select-type" onChange={
    (e)=>{
        filterType=e.target.value
    }
}>
{stateTypes.map((type, index)=>{
    return <option key={index} value={type}>{type}</option>
}
)}
</select>




{!filtered && <button className="btn btn-primary" onClick={()=>setFiltered(true)}>Filtrar</button>}
{filtered && <button className="btn btn-primary" onClick={()=>setFiltered(false)}>Dejar de Filtrar</button>}



<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">Inmobiliaria</a>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Vebnta</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Alquiler</a>
    </li>
    <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
    </li>
    </ul>
</div>
</nav>







<li>
<Link to="/sales">Ventas</Link>
</li>
<li>
<Link to="/rentals">Alquiler</Link>
</li>
<li>
<Link to="/users">Usuarios</Link>
</li>
<li>
<Link to="/profile">Perfil</Link>
</li>


<Route path="/rentals">
<Rental />
</Route>
<Route path="/users">
<Users />
</Route>
<Route path="/profile">
<Profile />
</Route>