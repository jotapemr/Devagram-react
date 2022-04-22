import comAutorizacao from '../../../hoc/comAtutorizacao'
import Feed from '../../../componentes/feed'
import { useState, useEffect } from 'react'
import {UseRouter} from 'next/router'
import UsuarioService from '../../../services/UsuarioService'
import CabecalhoPerfil from '../../../componentes/cabecalhoPerfil'


const usuarioService = new UsuarioService();

 function Perfil({usuarioLogado}){
    const [usuario, setUsuario] = useState({})
    const router = useRouter()

    const obterPerfil = async () => {
        try{
          const {data} = await usuarioService.obterPerfil(idUsuario)
          return data
        }catch(error){
            alert(`Erro ao obter perfil do usuário`)
        }
    }

    useEffect (async () => {
        if(!router.query.id){
            return
        }

        const dadosPerfil = await obterPerfil(router.query.id)

        setUsuario(dadosPerfil)
    }, [router.query.id])

    return(
        <div className='paginaPerfil'>
            <CabecalhoPerfil
                usuarioLogado={usuarioLogado}
                usuario={usuario}
            />
            
            <Feed 
                usuarioLogado={usuarioLogado}
                usuarioPerfil={usuario}
            />
        </div>
    ) 
}

export default comAutorizacao(Perfil)