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