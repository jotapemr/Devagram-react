import Link from "next/link";
import Avatar from "../avatar"
import Image from "next/image";
import imgCurtir from '../../public/imagens/curtir.svg'
import imgCurtido from '../../public/imagens/curtido.svg'
import imgComentarioAtivo from '../../public/imagens/comentarioAtivo.svg'
import imgComentarioCinza from '../../public/imagens/comentarioCinza.svg'

export default function Postagem({   
    usuario,
    fotoDoPost,
    descricao,
    comentarios
}){
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
                        {descricao}
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