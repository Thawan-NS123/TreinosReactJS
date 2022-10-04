import './index.scss'
import { Link } from 'react-router-dom'
import Titulos from '../CompProps'



export default function Treino3() {
    return(
        <main>
            <Link to='/'>Voltar</Link>
            <Titulos 
                title="Title"
                numero={1}
                paragrafo="paragrafo1"
                MainPrincipal='Main-conteiner'
                centralizar="flex-row"
                imagem="https://www.artmajeur.com/medias/standard/a/n/and-dobos/artwork/11902919_tablou-dragoste-ii-80cm-pictura-ulei.jpg"
                estilizar="Estilização"/>

            <Titulos 
                title="Title"
                numero={1}
                paragrafo="paragrafo2"
                MainPrincipal='Main-conteiner'
                centralizar="flex-row-reverse"
                imagem="https://www.artmajeur.com/medias/standard/m/a/mahesh/artwork/5998042_introducing_-Acrylic-18x24.jpg"
                estilizar="Estilização"/>
            
        </main>
    )
}

