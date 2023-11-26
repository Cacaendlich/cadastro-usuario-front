import { useState } from "react";
import Botao from "@/src/components/botao";
import InputPublico from "@/src/components/inputPublico";
import { validarEmail, validarSenha } from "@/src/utils/validadores";
import Link from "next/link";
import UsuarioService from "@/services/UsuarioService";

const usuarioService = new UsuarioService();

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);

  const validarFormulario = () =>{
    return (
      validarEmail(email)
      && validarSenha(senha)
    );
  }

  const enviarDadosLoginUsuario = async (event) => {
    event.preventDefault()
    if(!validarFormulario){
      return;
    }

    setEstaSubmetendo(true);

    try {
      const usuarioCadastrado = await usuarioService.cadastro({
        email: email,
        senha: senha
      });
      alert("Sucesso!"); 
    } catch (error) {
      alert(
        "Erro ao tentar fazer login: " + error?.response?.data?.error
      );
    }

    setEstaSubmetendo(false);

  }
  return (
    <>
      <section className="paginaCadastro paginaPublica">
      <div className="circuloSombra"></div>
          <div className="tituloContainer">
            <h1>LOGIN</h1>
          </div>
          <div className="conteudoPaginaPublica">
            <form onSubmit={enviarDadosLoginUsuario}>
              <InputPublico
                className="primeiroElemento"
                placeholder={'Email'}
                tipo={'email'}
                aoAlterarValorInput={evento => setEmail(evento.target.value)}
                valorInput={email}
                mensagemValidacao="Por favor, insira um email válido."
                exibirMensagemValidacao = {email && !validarEmail(email)}
              />
              <InputPublico
                tipo={'password'}
                placeholder={'senha'}
                aoAlterarValorInput={evento => setSenha(evento.target.value)}
                valorInput={senha}
                mensagemValidacao='A senha deve conter pelo menos 4 caracteres.'
                exibirMensagemValidacao = {senha && !validarSenha(senha)}
              />
              <Botao
                tipo="submit"
                texto={'LOGIN'}
                desabilitado={!validarFormulario() || estaSubmetendo}
              />
              <Link href='/cadastro'>
              <Botao
                texto={'Sign up'}
                cor="secundario"
              />
            </Link>
            </form>
          </div>
      </section>
    </>
  );
}