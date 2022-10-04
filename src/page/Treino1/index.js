import './index.scss'
import { Link } from 'react-router-dom'

export default function Treino1(){

    function digitando(event){
        alert('Você apertou a tecla' + " " + event.key)
    }

    function mudouNome(){
        alert("Você alterou o nome ")
    }

    function mouse(){
        alert("Você Passou o Mouse no titulo!!")
    }

    function assinalou1(){
        alert('Você marcou a Opção 1')
    }
    function assinalou2(){
        alert('Você marcou a Opção 2')
    }
    function check1(){
        alert("Você assinalou a Opção 1")
    }
    function check2(){
        alert("Você assinalou a Opção 2")
    }

    function precionar(){
        alert("Você apertou o botão okay")
    }

    return(
        <header className='Page-Conteiner'>
            <Link to='/'>Voltar</Link>
            <section className='Page-Section'>
                <div>
                    <h1 onMouseMove={mouse} className='Titulo'>Olá, seja bem-vindo</h1>
                    <input className='input-Digite_Aqui' onKeyDown={digitando} placeholder='Digite Aqui'/>
                    <select onChange={mudouNome} className='input-Selecione'>
                        <option> </option>
                        <option>Thawan Nascimento</option>
                        <option>Tadeu Henrique</option>
                        <option>Guilherme Dias</option>
                        <option>Robert Santos</option>
                        <option>Carolina Gomes</option>
                    </select>
                </div>
                <div className='input-button'>
                    <div>
                        <div className='input-Radio'>
                            <input className='Radio' type='radio' onClick={assinalou1}/> Opção 1
                            <input className='Radio' type='radio' onClick={assinalou2}/> Opção 2
                        </div>
                        <div>
                            <input type='checkbox' onClick={check1}/> Opção 1
                            <input type='checkbox' onClick={check2}/> Opção 2
                        </div>
                    </div>
                    <button onClick={precionar}>Okay</button>
                </div>
        </section>
    </header>
    )
}