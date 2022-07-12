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







<div className='states-cont__header'>
                {/* <h1>Estados</h1> */}
                <h1>Ingresar datos de la Propiedad</h1>
            </div>
            <p/>
            <form>
                {/* <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div> */}
                <div className="form-group">
                    <label for="inputName">Nombre</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Ej: Casa Barrio Martin"
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <label for="inputAddress">Direccion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Pellegrini 2200"
                        value={address} onChange={e => setAddress(e.target.value)}
                    />
                    <label for="inputLocation">Ciudad</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="Rosario"
                        value={location} onChange={e => setLocation(e.target.value)}
                    />
                    <label for="inputPostCode">Codigo Postal</label>
                    <input type="number" className="form-control" id="inputPostCode" placeholder="2000"
                        value={postCode} onChange={e => setPostCode(e.target.value)}
                    />
                    <label for="inputType">Tipo</label>
                    <select type="text" className="form-control" id="inputType" placeholder="Casa" 
                        defaultValue={'Casa'} multiple={false}
                        value={type} onChange={e => setType(e.target.value)}>
                        <option selected value='Casa'>Casa</option>
                        <option value='Departamento'>Departamento</option>
                        <option value='PH'>PH</option>
                        <option value='Terreno'>Terreno</option>
                        <option value='Oficina'>Oficina</option>
                        <option value='Negocio'>Negocio</option>
                        <option value='Campo'>Campo</option>
                        <option value='Otra'>Otra</option>
                    </select>
                    <br/>
                    <div className="form-check">
                        <label className="form-check-label" for="inputSale">Venta</label>
                        <input className="form-check-input" type="checkbox" id="inputSale"
                            value={sale} onClicke={e => setSale(e.target.handleChecked)}
                        />
                    </div>
                    <label for="inputPrice">Precio de Venta en dolares</label>
                    <input type="number" className="form-control" id="inputPrice" placeholder="200000"
                        value={price} onChange={e => {setPrice(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                </div>
                <br/>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="inputRent"
                        value={rent} onChange={e => setRent(!rent)}
                    />
                    <label className="form-check-label" for="inputRent">Alquiler</label>
                    </div>
                    <label for="inputRentPrice">Precio del Alquiler en pesos</label>
                    <input type="number" className="form-control" id="inputRentPrice" placeholder="50000"
                        value={rentPrice} onChange={e => setRentPrice(e.target.value)}
                    />
                    <div className="form-group col-md-2">
                        <label for="inputRentMode">Modo</label>
                        <select id="inputRentMode" className="form-control" 
                            defaultValue={'Mensual'} multiple={false}
                            value={rentMode} onChange={e => setRentMode(e.target.value)}>
                            <option selected value='Mensual'>Mensual</option>
                            <option value='Anual'>Anual</option>
                            <option value='Otra'>Otra</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <label for="inputOwner">Dueño</label>
                    <input type="text" className="form-control" id="inputOwner" placeholder="Juan Carlos Rodriguez"
                        value={owner} onChange={e => setOwner(e.target.value)}
                    />
                    <label for="inputDescription">Descripcion</label>
                    <textarea type="text" className="form-control" id="inputDescription" rows={3}
                    placeholder="Breve descripcion de la propiedad (menor a 500 caracteres)"
                        value={description} onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={
                    (e) => {
                        e.preventDefault()
                        setState({
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
                        }).then(console.log(state))
                        createState(state)
                        console.log('p',name, address, location, postCode, type, sale, price, rent, rentPrice, rentMode, owner, description)
                        console.log('state',state)
                    }
                }>Ingresar Propiedad</button>
            </form>