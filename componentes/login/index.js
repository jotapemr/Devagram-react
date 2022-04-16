import inputPublico from "../inputPublico"
import imagemEnvelope from '../../public/imagens/envelope.svg'

export default function Login(){
    return(
        <section className={`paginaLogin paaginaPublica`}>
            <div className="logoContainer">

            </div>
            <div className="conteudoPaginaPublica">
                <form>
                    <inputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                    />
                </form>
            </div>
        </section>
    )
}