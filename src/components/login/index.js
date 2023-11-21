import { useState } from "react";

import Botao from "@/src/components/botao";
import InputPublico from "@/src/components/inputPublico";

import { validarEmail, validarSenha } from "@/src/utils/validadores";

import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarFormulario = () =>{
    return (
      validarEmail(email)
      && validarSenha(senha)
    );
  }
  return (
    <>
      <section className="paginaCadastro paginaPublica">
      <div className="circuloSombra"></div>
          <div className="tituloContainer">
            <h1>LOGIN</h1>
          </div>
          <div className="conteudoPaginaPublica">
            <form>
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
                manipularClick={() => console.log('clicou Cadastrar')}
                desabilitado={false}
              />
              <Link href='/cadastro'>
              <Botao
                texto={'Sign up'}
                cor="secundario"
                manipularClick={() => console.log('clicou Cadastro')}
              />
            </Link>
            </form>
          </div>
      </section>
    </>
  );
}