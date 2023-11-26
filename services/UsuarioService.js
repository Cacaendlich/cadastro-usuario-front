import HttpService from "./HttpService";

export default class UsuarioService extends HttpService{
    async login(dadosLogin){
        const { data } = await this.post('/login', dadosLogin)

        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);

        if(data.avatar){
            localStorage.setItem("avatar", data.avatar);
        }
    }

    async cadastro(dadosUsuario){
        return this.axios.post('/cadastro',dadosUsuario);
    }
}