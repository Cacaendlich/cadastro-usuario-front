import { useState } from "react";
import Botao from "@/src/components/botao";
import InputPublico from "@/src/components/inputPublico";
import { validarNome, validarEmail, validarSenha, validarConfirmarSenha } from "@/src/utils/validadores";
import Link from "next/link";
import UsuarioService from "@/services/UsuarioService";


const usuarioService = new UsuarioService();

export default function Cadastro() {
  return (
   <CadastroCard />  
  );
}

function CadastroCard() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);

  const validarFormulario = () => {
    return (
      validarNome(nome)
      && validarEmail(email)
      && validarSenha(senha)
      && validarConfirmarSenha(senha, confirmarSenha)
    );
  }

  const enviarDadosCadastroUsuario = async (event) => {
    event.preventDefault()
    if(!validarFormulario){
      return;
    }

    setEstaSubmetendo(true);

    try {
      const usuarioCadastrado = await usuarioService.cadastro({
        nome: nome,
        email: email,
        senha: senha
      });
    } catch (error) {
      alert(
        "Erro ao tentar fazer login. " + error?.response?.data?.error
      );
    }

    setEstaSubmetendo(false);

  }

  return (
    <>
      <section className="paginaCadastro paginaPublica">
      <div className="circuloSombra"></div>
          <div className="tituloContainer">
            <h1>SIGN IN</h1>
          </div>
          <div className="conteudoPaginaPublica">
            <form onSubmit={enviarDadosCadastroUsuario}>
              <InputPublico
                className="primeiroElemento"
                placeholder={'nome'}
                tipo={'text'}
                aoAlterarValorInput={evento => setNome(evento.target.value)}
                valorInput={nome}
                mensagemValidacao={'O nome deve conter pelo menos 3 caracteres.'}
                exibirMensagemValidacao = {nome && !validarNome(nome)}
              />

              <InputPublico
                placeholder={'email'}
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

              <InputPublico
                tipo={'password'}
                placeholder={'Confirm senha'}
                aoAlterarValorInput={evento => setConfirmarSenha(evento.target.value)}
                valorInput={confirmarSenha}
                mensagemValidacao='As senhas não coincidem.'
                exibirMensagemValidacao = {senha && !validarConfirmarSenha(senha, confirmarSenha)}
              />

              <Botao
                tipo="submit"
                texto={'SIGN UP'}
                desabilitado={!validarFormulario() || estaSubmetendo}
              />

              <Link href='/'>
              <Botao
                texto={'Login'}
                cor="secundario"
              />
            </Link>
            </form>
          </div>
      </section>
    </>
  );
}