import { useState } from 'react'
import './formulario.css'
import CampoTexto from '../CampoTexto'
import DropDown from '../DropDown'
import Button from '../Botão/button'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    // Constante criada para ser executada quando o usuário clicar no
    // Botão submit do "criar card"
    const aoSalvar = (evento) => {
        // evento.preventDefault() é para a página não recarregar
        // automaticamente ao clicar em Submit
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <DropDown
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomesDosTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Formulario