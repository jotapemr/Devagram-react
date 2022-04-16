import {useState} from "react"
import inputPublico from "../inputPublico"
import imagemEnvelope from '../../public/imagens/envelope.svg'
import imagemChave from '../../public/imagens/chave.svg'
import imagemLogo from '../../public/imagens/logo.svg'
import Image from "next/image"
import Botao from "../botao"
import Link from "next/link"

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <section className={`paginaLogin paaginaPublica`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"               
                />
            </div>
            <div className="conteudoPaginaPublica">
                <form>
                    <inputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlteraValor = {e => setEmail(e.target.value)}
                        valor={email}
                    />

                    <inputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlteraValor = {e => setSenha(e.target.value)}
                        valor={senha}
                    />

                    <Botao
                        texto="Login"
                        tipo="submit"
                        desabilitado={false}                   
                    />

                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href="/cadastro">Faça seu cadastro agora!</Link>
                </div>
            </div>
        </section>
    )
}