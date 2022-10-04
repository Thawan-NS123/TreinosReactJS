import './index.scss'

function Seções(props){

    return(
        <section className={props.compSeção}>
            <div className={props.value}>
                <h1 className={props.titulo}>Seção {props.seção}</h1>
                <div className={props.alinhamento}>
                    <p className={props.text}>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Vestibulum ex odio, varius
                        non maximus at, consectetur non <span className={props.visibity}> purus.
                        Ut nec ullamcorper nisl, non porttitor dui.</span>
                    </p>
                    <div className={props.Quadrados}>
                        <div className={props.QuadradoEsquerda}></div>
                        <div className={props.QuadradoCentro}></div>
                        <div className={props.QuadradoDireita}></div>
                    </div>     
                </div>
            </div>
        </section>
    )
}

export default Seções;