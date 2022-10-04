import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { Link } from "react-router-dom";
import './index.css'

export default function Treino6() {

    const [calc, setCalc] = useState(0);
    const [resultado, setResultado] = useState("Aguardando...")

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);
    const [media, setMedia] = useState("Aguardando...");

    const [selecionar, setSelecionar] = useState("verde")

    const [cor1, setCor1] = useState("Verde");
    const [cor2, setCor2] = useState("Amarelo");
    const [cor3, setCor3] = useState("Vermelho");
    const [semafaro, setSemafaro] = useState("Aguardando...")
    

    {/*Ativida 1*/}
    function verificarSituacao() {
        if (calc < 0 || calc > 10)
            setResultado("Nota Invalida");
        else if (calc >= 3 && calc < 5)
            setResultado("Aluno de Recuperação");
        else if (calc >= 5)
            setResultado("Aluno Aprovado ;)");
        else
            setResultado("Aluno reprovou!!!")
    }

    useEffect(() => {
        verificarSituacao()
    }, [calc]);

    {/*Ativida 2*/}
    function verificarMedia(){
        let x = (n1 + n2 + n3) / 3;

        if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10)
            setMedia("Nota Invalida");
        else if (x >= 3 && x < 5)
            setMedia("Aluno de Recuperação");
        else if (x >= 5)
            setMedia("Aluno Aprovado ;)");
        else
            setMedia("Aluno reprovou!!!")
    }

    useEffect(() => {
        verificarMedia()
    }, [n1, n2, n3]);


    {/*Ativida 3*/}
    function semaphore() {
        if(!cor2 && !cor3)
            setSemafaro("Permitido Passagem");
        if(!cor1 && !cor3)
            setSemafaro("Diminua a velocidade");
        if(!cor1 && !cor2)
            setSemafaro("Pare!");
    }

    useEffect(() => {
        semaphore()
    }, []);


    return(
        <main>
            <Link to='/'> Voltar </Link>
            <div className="Efeito1">
                <h2>Situação Aluno</h2>     
                <div className="flex-row">

                    <input 
                        type="number" 
                        className="CaixaTexto_Nota"
                        value={calc} onChange={e => setCalc(Number(e.target.value))} />

                    <span>{resultado}</span>
                </div>
            </div>
{/* ---------------------------------------------------------------- */}
            <div className="Efeito2">
                <h2>Situação Aluno</h2>
                    <div className="Efeito2_flex-row">
                        <div className="Notas">
                            <input 
                                type="number" 
                                className="CaixaTexto_Media"
                                value={n1}
                                onChange={e => setN1(Number(e.target.value))}/>

                            <input 
                                type="number" 
                                className="CaixaTexto_Media"
                                value={n2}
                                onChange={e => setN2(Number(e.target.value))}/>

                            <input 
                                type="number" 
                                className="CaixaTexto_Media"
                                value={n3}
                                onChange={e => setN3(Number(e.target.value))}/>
                        </div>
                        <span>{media}</span>
                    </div>
            </div> 
{/* ---------------------------------------------------------------- */}
            <div className="Efeito3">
                <div >
                    <h1>Semáfaro</h1>
                    <h3>{semafaro}</h3>
                </div>

                <div className="Semafaro">
                    <div value={cor1} onClick={e => setSemafaro(e.target.value)} className={"sla" + " " +"verde"}></div>
                    <div value={cor2} onClick={e => setSemafaro(e.target.value)} className="amarelo"></div>
                    <div value={cor3} onClick={e => setSemafaro(e.target.value)} className="vermelho"></div>
                </div>
            </div>
{/* ---------------------------------------------------------------- */}
            <div className="Efeito4">
                <h2>Tarefas</h2>
                <div>
                    <input type="checkbox" />Tarefa 1 
                    <input type="checkbox" />Tarefa 2
                    <input type="checkbox" />Tarefa 3
                    <input type="checkbox" />Tarefa 4
                    <input type="checkbox" />Tarefa 5
                </div>
                <div></div>
            </div>
        </main>
    )
}