import { useState } from "react";
import Botao from "@/src/components/botao";
import InputPublico from "@/src/components/inputPublico";
import Link from "next/link";

export default function Cadastro() {
  return (
   <CadastroCard />  
  );
}

function CadastroCard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <section className="paginaCadastro paginaPublica">
      <div className="circuloSombra"></div>
          <div className="tituloContainer">
            <h1>SIGN IN</h1>
          </div>
          <div className="conteudoPaginaPublica">
            <form>
              <InputPublico
                placeholder={'name'}
                tipo={'text'}
                aoAlterarValorInput={evento => setName(evento.target.value)}
                valorInput={name}
              />
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
                texto={'SIGN UP'}
                manipularClick={() => console.log('clicou Cadastrar')}
                desabilitado={false}
              />
              <Link href='/'>
              <Botao
                texto={'Log in'}
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