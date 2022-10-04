import { Link } from 'react-router-dom'
import './index.scss'
import Usuario from '../ComponentesII'


export default function Treino4(){



    return(
        <main className='Principal-Container'>
            <Link to='/'> Voltar </Link>
            <div className='Componentes-Usuario1'>
                <Usuario 
                    divPrincipal='div-container'
                    img='https://cdn-icons-png.flaticon.com/512/17/17004.png'
                    tamanho='tamanho-image'
                    name={'Thawan'}
                    idade={18}
                    nasc={2003}
                    mensagem="Meu hobbie é programar"/>

                <Usuario 
                    divPrincipal='div-container'
                    img='https://cdn-icons-png.flaticon.com/512/17/17004.png'
                    tamanho='tamanho-image'
                    name={'Cleiton'}
                    idade={1000}
                    nasc={1022}
                    mensagem="Meu hobbie é ser fulminante sem patifaria"/>
            </div>      

              

            <div className='Componentes-Usuario2'>
                <Usuario 
                    divPrincipal='div-container'
                    img='https://cdn-icons-png.flaticon.com/512/17/17004.png'
                    tamanho='tamanho-image'
                    name={'Jonas'}
                    idade={20}
                    nasc={2002}
                    mensagem="Meu hobbie é fazer artes conceituais"/>

                <Usuario 
                    divPrincipal='div-container'
                    img='https://cdn-icons-png.flaticon.com/512/17/17004.png'
                    tamanho='tamanho-image'
                    name={'sla'}
                    idade={10000}
                    nasc={-10000}
                    mensagem="Meu hobbie é programar"/>
            </div>         
        </main>
    )
}