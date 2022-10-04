



function Titulos(props){
    return(
        <main className={props.MainPrincipal}>
            <h1 className={props.title}>Titulo {props.numero}</h1>
            <div className={props.centralizar}>
                <p className={props.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Vestibulum ex odio, varius
                non maximus at, consectetur non purus. 
                Ut nec ullamcorper nisl, non porttitor dui
                </p>
                <img src={props.imagem}
               className={props.estilizar}
                     alt='Imagem'/>
            </div>
        </main>
    )
}

export default Titulos