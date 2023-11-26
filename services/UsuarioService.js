import HttpService from "./HttpService";

export default class UsuarioService extends HttpService{
    //métodos login

    async cadastro(dadosUsuario){
        return this.axios.post('/cadastro',dadosUsuario);
    }
}