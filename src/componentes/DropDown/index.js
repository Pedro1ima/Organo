import './DropDown.css'

const DropDown = (props) => {
    console.log(props.itens)

    // JSX
    return (
        <div className='Drop-Down'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {/* Para cada item => 'devolverá' uma option com o nome do item */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown