import imgSetaEsquerda from '../../public/imagens/setaEsquerda.svg'
import cabecalhoComAcoes from '../cabecalhoComAcoes'
import Botao from '../botao'
import Avatar from '../avatar'
import { useEffect, useState } from 'react'
import UsuarioService from '../../services/UsuarioService'
import { useRouter } from 'next/router'

const usuarioService = new UsuarioService()

export default function CabecalhoPerfil({
    usuario
}) {
    const[estaSeguindoUsuario,  setEstaSeguindoUsuario] = useState(false)
    const [quantidadeSeguidores, setQuantidadeSeguidores] = useState(0)
    const router = useRouter()

    useEffect(() => {
        if(usuario){
            return
        }
        setEstaSeguindoUsuario(usuario.segueEsseUsuario)
        setQuantidadeSeguidores(usuario.seguidores)
    }, [usuario])

    const obterTextoBotaoSeguir = () => {
        if(estaSeguindoUsuario){
            return 'Deixar de seguir'
        }
        return 'Seguir'
    }

    const obterCorDoBotaoSeguir = () => {
        if(estaSeguindoUsuario){
            return 'invertido'
        }
        return 'primaria'
    }

    const manipularCliqueBotaoSeguir = async () => {
        try{
            await usuarioService.alternarSeguir(usuario._id)
            setEstaSeguindoUsuario(!estaSeguindoUsuario)
            setQuantidadeSeguidores(
                estaSeguindoUsuario 
                ? (quantidadeSeguidores - 1)
                : (quantidadeSeguidores + 1)

            )
        }catch(erro){
            aler(`Errom ao seguir ou deixar de seguir`)
        }
    }

    const aoClicarSetaEsquerda = () => {
        router.back()
    }

    return(


        <div className='cabecalhoPerfil largura30pctDesktop'>
            <CabecalhoComAcoes
                iconeEsquerda={imgSetaEsquerda}
                aoClicarSetaEsquerda={aoClicarSetaEsquerda}
                titulo={usuario.nome} 
            />

            <hr className='bordaCabecalhoPerfil'/>

            <div className='statusPerfil'>
                <Avatar src={usuario.avatar}/>
                <div className='informacoesPerfil'>
                    <div className='statusContainer'>
                        <div className='status'>
                            <strong>{usuario.publicacoes}</strong>
                            <span>Publicações</span>
                        </div>
                        <div className='status'>
                            <strong>{quantidadeSeguidores}</strong>
                            <span>Seguidores</span>
                        </div>
                        <div className='status'>
                            <strong>{usuario.seguindo}</strong>
                            <span>Seguindo</span>
                        </div>
                    </div>
                    <Botao
                        texto={obterTextoBotaoSeguir()}
                        cor={obterCorDoBotaoSeguir()}
                        manipularClique={manipularCliqueBotaoSeguir}
                    />
                </div>
            </div>
        </div>
    )
}