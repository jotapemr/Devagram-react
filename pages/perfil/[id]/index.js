import comAutorizacao from '../../../hoc/comAtutorizacao'
import Feed from '../../../componentes/feed'
import { useState, useEffect } from 'react'
import {UseRouter} from 'next/router'
import UsuarioService from '../../../services/UsuarioService'
import CabecalhoPerfil from '../../../componentes/cabecalhoPerfil'

 function Perfil({usuarioLogado}){
    const [usuario, setUsuario] = useState({})
    const router = useRouter()

    useEffect (async () => {
        setUsuario({
            //usuario mockado (por enquanto)
        })
    }, [router.query.id])

    return(
        <div className='paginaPerfil'>
            <CabecalhoPerfil
                usuarioLogado={usuarioLogado}
                usuario={usuario}
            />
            
            <Feed usuarioLogado={usuarioLogado}/>
        </div>
    ) 
}

export default comAutorizacao(Perfil)