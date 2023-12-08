import './button.css'

const Button = (props) => {
    

    // JSX
    return (
            <button className='botao'>{props.children}</button>
    );
}

export default Button