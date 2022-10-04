import { useEffect, useState } from 'react'
import './index.css'

import { Link } from 'react-router-dom'



export default function Treino5(){

    const [titulo, setTitulo] = useState("Hello World!!!");

    const [select, setSelect] = useState("Linguagem de Programação");

    const [selecionado, setSelecionado] = useState("Sim");

    const [texto, setTexto] = useState("Click no botão para atualizar");
    const [atualizar, setAtualizar] = useState("")

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        setTitulo(titulo)
    }, [])
{/* -------------------------------------------------------------------------------------------- */}
    useEffect(() => {
        setSelect(select)
    }, [select])
{/* -------------------------------------------------------------------------------------------- */}
    useEffect(() => {
        setAtualizar(atualizar)
    }, [texto])
{/* -------------------------------------------------------------------------------------------- */}
    function soma(){
        setResultado(n1 + n2);
    }

    useEffect(() => {
        setResultado();
    }, [])

    return(
        <main>
            <Link to='/'>Voltar</Link>
            <div className="Exercicio-1">
                <h1 className="Titulo_Exercicio-1">{titulo}</h1>
                <input className="CaixaTexto_Exercicio-1" onChange={e => setTitulo(e.target.value)}/>
            </div>
{/* -------------------------------------------------------------------------------------------- */}
            <div className="Exercicio-2">
                <h1 className="Titulo_Exercicio-2">{select}</h1>
                <select className="CaixaTexto_Exercicio-2" 
                        onChange={e => setSelect(e.target.value)}>
                    <option>JavaScript</option>
                    <option>Csharp</option>
                    <option>Java</option>
                    <option>PHP</option>
                </select>
            </div>
{/* -------------------------------------------------------------------------------------------- */}
            <div className="Exercicio-3">
                <h1 className="Titulo_Exercicio-3">Selecionado? <span>{selecionado}</span></h1>
                <input type='checkbox' className="CaixaTexto_Exercicio-3" onClick={e => setSelecionado(e.target.value)}/>
            </div>
{/* -------------------------------------------------------------------------------------------- */}
            <div className="Exercicio-4">
                <h1 className="Titulo_Exercicio-4">{texto}</h1>
                <div className="flex-row">
                    <input className="CaixaTexto_Exercicio-4" value={texto} onChange={e => setTexto(e.target.value)} />
                    <button className='button-atualizar' onClick={atualizar}>Atualizar</button>
                </div>
            </div>
{/* -------------------------------------------------------------------------------------------- */}
            <div className="Exercicio-5">
                <h1 className="Titulo_Exercicio-5">Somar dois Números</h1>
                <div className="flex-row">
                    <input type='number' className="CaixaTexto_Exercicio-5" value={n1} onChange={e => setN1(Number(e.target.value))} />
                    <input type='number' className="CaixaTexto_Exercicio-5" value={n2} onChange={e => setN2(Number(e.target.value))} />
                    <button  className='button-atualizar' onClick={soma}>Somar</button>
                    <h3>{resultado}</h3>
                </div>
            </div>
{/* -------------------------------------------------------------------------------------------- */}
            <div className="Exercicio-6">
                <h1 className="Titulo_Exercicio-6">Sobre Mim</h1>
                <div className="flex-column">
                    <div className="flex-row">
                        <input className="CaixaTexto_Exercicio-6_nome" placeholder='Informe seu nome'/>
                        <input type='date' className="CaixaTexto_Exercicio-6_nascimento" placeholder='22/10/1989'/>
                    </div>
                    <div className="flex-row">
                        <input className="CaixaTexto_Exercicio-6_altura" placeholder="Altura" />
                        <input className="CaixaTexto_Exercicio-6_peso"  placeholder="Peso"/>
                        <input type="checkbox" className="CaixaTexto_Exercicio-6" /><p class='Trabalha_atualmente'>Trabalha atualmente</p> 
                        <button className='button-atualizar' >Visualizar</button>
                    </div>
                </div>

                <div className="Ficha">
                    <h1>Ficha</h1>
                    <div>
                        <h3 className="nome">Nome: <span>Thawan Nascimento Silva</span></h3>
                        <h3 className="nascimento">Nascimento:<span>29/10/2003 <span>(18 anos)</span></span></h3>
                    </div>
                    <div>
                        <div className="Alt_Pes_IMC">
                            <h3 className="altura">Altura:<span>1,89</span></h3>
                            <h3 className="peso">Peso:<span>81.05</span></h3>
                            <h3 className="imc">IMC: <span>21.22</span></h3>
                        </div>
                        <h3 className="trabalha">Trabalha:<span>Sim</span></h3>
                    </div>
                </div>
            </div>

        </main>
    )
}