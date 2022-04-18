import comAutorizacao from '../../hoc/comAtutorizacao';
import { feed } from '../feed';

function Home({usuarioLogado}) {
    return (
        <Feed usuarioLogado={usuarioLogado}/>
    )
}

export default comAutorizacao(Home); 