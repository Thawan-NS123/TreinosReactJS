import './index.scss'
import { Link } from 'react-router-dom'
import Seções from '../Componentes'

export default function Treino2(){

    let seção = 1;
    
    return(
       <main ClassName="main-page">
        <Link to='/'>Voltar</Link>
        <Seções 
            titulo="titulo" 
            seção={seção}
            text="text1"
            alinhamento="box-row" 
            compSeção="Coponentes1" 
            Quadrados="Quadrado1"
            QuadradoEsquerda="Quadrado-Esquerda1"
            QuadradoCentro="Quadrado-Centro1"
            QuadradoDireita="Quadrado-Direita1"/>

        <Seções 
            titulo="titulo" 
            seção={2}
            text="text2"
            alinhamento="box-row-reverse" 
            compSeção="Coponentes2" 
            Quadrados="Quadrado2"
            QuadradoEsquerda="Quadrado-Esquerda2"
            QuadradoCentro="Quadrado-Centro2"
            QuadradoDireita="Quadrado-Direita2"/>

        <Seções 
            seção={3}
            alinhamento="box-column" 
            value="centro" 
            text="text3"
            visibity="visibilidade"
            compSeção="Coponentes3" 
            Quadrados="Quadrado3"
            QuadradoEsquerda="Quadrado-Esquerda3"
            QuadradoCentro="Quadrado-Centro3"
            QuadradoDireita="Quadrado-Direita3"/>

       </main> 
    )
}