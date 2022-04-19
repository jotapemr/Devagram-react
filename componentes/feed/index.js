import { useState, useEffect } from "react";
import Postagem from "./Postagem";

export function feed(){
    const [listaDePostagens, setListaDePostagens] = useState;

    useEffect(() => {
            console.log('carregar o feed')
            setListaDePostagens([
                {
                    id: 1,
                    usuario:{
                        id: '1',
                        nome: 'Douglas',
                        avatar: null,
                    },
                    fotoDoPost: '',
                    descricao:'',
                    likes: [],
                    comentarios:[
                        {
                            nome: 'teste',
                            mensage: 'top'
                        }
                    ]

                    
                }
            ])


    }, [usuarioLogado])

    return (
        <div className="feedContainer largura30pctDesktop">
            {listaDePostagens.map(dadosPostagem => (
                <Postagem key={dadosPostagem.id} {...dadosPostagem}/>
            ))}
        </div>
    )
}