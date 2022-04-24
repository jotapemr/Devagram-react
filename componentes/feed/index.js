import { useState, useEffect } from "react";
import feedService from "../../services/feedService";
import Postagem from "./Postagem";

const FeedService = new feedService();

export default function Feed({ usuarioLogado, usuarioPerfil }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);

    useEffect(async () => {
        setListaDePostagens([]);
        const { data } = await FeedService.carregarPostagens(usuarioPerfil?._id);

        const postagensFormatadas = data.map((postagem) => (
            {
                id: postagem._id,
                usuario: {
                    id: postagem.userId,
                    nome: postagem?.usuario?.nome || usuarioPerfil?.nome,
                    avatar: postagem?.usuario?.avatar || usuarioPerfil?.avatar
                },
                fotoDoPost: postagem.foto,
                descricao: postagem.descricao,
                curtidas: postagem.likes,
                comentarios: postagem.comentarios.map(c => ({
                    nome: c.nome,
                    mensagem: c.comentario
                }))
            }
        ));

        setListaDePostagens(postagensFormatadas);
    }, [usuarioLogado, usuarioPerfil]);

    if (!listaDePostagens.length) {
        return null;
    }

    return (
        <div className="feedContainer largura30pctDesktop">
            {listaDePostagens.map(dadosPostagem => (
                    <Postagem
                        key={dadosPostagem.id}
                        {...dadosPostagem}
                        usuarioLogado={usuarioLogado}
                    />
                ))
            }
        </div>
    )
}