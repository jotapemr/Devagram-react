import { useState, useEffect } from "react";

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
                    fotoPost: '',
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
        <></>
    )
}