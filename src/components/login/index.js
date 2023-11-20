import { useState } from "react";
import Botao from "@/src/components/botao";
import InputPublico from "@/src/components/inputPublico";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <section className="paginaCadastro paginaPublica">
      <div className="circuloSombra"></div>
          <div className="tituloContainer">
            <h1>LOG IN</h1>
          </div>
          <div className="conteudoPaginaPublica">
            <form>
              <InputPublico
                placeholder={'Email'}
                tipo={'email'}
                aoAlterarValorInput={evento => setEmail(evento.target.value)}
                valorInput={email}
              />
              <InputPublico
                tipo={'password'}
                placeholder={'Password'}
                aoAlterarValorInput={evento => setPassword(evento.target.value)}
                valorInput={password}
              />
              <Botao
                tipo="submit"
                texto={'LOG IN'}
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