import comAutorizacao from '../../hoc/comAtutorizacao';
import { feed } from '../feed';

function Home({usuarioLogado}) {
    return (
        <feed usuarioLogado={usuarioLogado}/>
    )
}

export default comAutorizacao(Home); 