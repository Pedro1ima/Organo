import './CampoTexto.css'

// Criando a váriavel para depois exporta-la para o App.js
const CampoTexto = (props) => {

    // Utilizado no lugar do {props.placeholder}
    // const placeholderModificado = `${props.placeholder}... `


    // Fazer um "hook" // Foi dado um valor:"valor" e um 
    // "setValor" que é uma forma de guardar esse valor.
    // Serve para conforme o valor muda, o estado também muda,
    // com isso o react sabe que ele precisa renderizar 
    // o componente diferente.


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    // JSX
    return (
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}


export default CampoTexto