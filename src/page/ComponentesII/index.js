import './index.scss'


function Usuario(props){

    function hobbie(){
        alert(props.mensagem)
    }

    return(
        <section className={props.divPrincipal + " " + 'PrincipalDiv'}>
            <div className='usuario'>
                <img src={props.img}
                     alt='Usuario-Icone'
                     className='tamanho'/>
                <h1>{props.name}</h1>
            </div>
            <div className='form-idade_nasc'>
                
                <div >
                    <p> Idade <span className='span-Idade'>{props.idade}</span></p>
                </div>

                <div>
                    <p> Nascimento <span className='span-Nasc'>{props.nasc}</span></p>
                </div>

                <button onClick={hobbie}> Hobbie </button>

            </div>

            
        </section>
    )
}


export default Usuario;