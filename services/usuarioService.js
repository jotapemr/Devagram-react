import HttpService from "./HttpService.js";

export default class UsuarioService extends HttpService {
    async login(credenciais) {
        const { data } = await this.post('/login', credenciais);

        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);

        const usuario = await this.get('/usuario')
        localStorage.setItem('id', usuario.data._id)

        if (data.avatar) {
            localStorage.setItem("avatar", data.avatar);
        }
    }

    async cadastro(dados) {
        return this.post('/cadastro', dados);
    }

    estaAutenticado(){
        return localStorage.getItem('token') !== null
    }

    async pesquisar(termoDaPesquisa) {
        return this.get('/pesquisa?filter=' + termoDaPesquisa);
    }

    obterInformacoesDoUsuarioLogado(){
        return{
            id: localStorage.getItem('id'),
            nome: localStorage.getItem('nome'),
            email: localStorage.getItem('email'),
            avatar: localStorage.getItem('avatar')

        }
    }
} 