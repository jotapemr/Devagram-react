import Link from "next/link";
import Avatar from "../avatar"
import Image from "next/image";
import imgCurtir from '../../public/imagens/curtir.svg'
import imgCurtido from '../../public/imagens/curtido.svg'
import imgComentarioAtivo from '../../public/imagens/comentarioAtivo.svg'
import imgComentarioCinza from '../../public/imagens/comentarioCinza.svg'
import { useState } from "react";

const tamanhoLimiteDescricao = 90

export default function Postagem({   
    usuario,
    fotoDoPost,
    descricao,
    comentarios
}){

    const [tamanhoAtualDaDescricao, setTamanhoAtualDaDescricao] = useState(
        tamanhoLimiteDescricao
    )

    const exibirDescricaoCompleta = () => {
        setTamanhoAtualDaDescricao(Number.MAX_SAFE_INTEGER)
    }

    const descricaoMaiorQueLimite = () =>{
        return descricao.lenght > tamanhoAtualDaDescricao
    }

    const obterDescricao = () => {
        let mensagem = descricao.substring(0, tamanhoAtualDaDescricao)
        if(descricaoMaiorQueLimite()){
            mensagem += '...'
        }
        return mensagem
    }

    return(
        <div className="postagem">
            <Link href={`/perfil/${usuario.id}`}>
                <section className="cabaçalhoPostagem">
                    <Avatar src={usuario.avatar}/>
                    <strong>{usuario.nome}</strong>
                </section>
            </Link>

            <div className="fotoDaPostagem">
                <img src={''} alt='fotopostagem'/>
            </div>

            <div className="rodapeDaPostagem">
                <div className="acoesPostagem">
                    <Image
                        src={imgCurtir}
                        alt={'ícone curtir'}
                        width={20}
                        height={20}
                        onClick={() => console.log('curtir')}
                    />

                    <Image
                        src={imgComentarioCinza}
                        alt={'ícone comentário'}
                        width={20}
                        height={20}
                    />

                    <span className="quantidadeCurtidas">
                        Curtido por <strong>testando</strong>
                    </span>
                </div>

                <div className="descricaoDaPostagem">
                    <strong className="nomeUsuario">{usuario.nome}</strong>
                    <p className="descricao">
                        {obterDescricao()}
                        {descricaoMaiorQueLimite() && (
                            <span
                                onClick={exibirDescricaoCompleta}
                                className="exibirDescricaoCompleta">
                                mais
                            </span>
                        )}
                    </p>
                </div>
            </div>

            <div className="comentarioDaPublicacao">
                {comentarios.map(comentario, i => (
                    <div className="comentario" key={i}>
                        <strong>{comentario.nome}</strong>
                        <p className="descricao">{comentarios.mensagem}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}